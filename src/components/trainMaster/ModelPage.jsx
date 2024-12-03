import React, { useState } from "react";
import Img from "./icons/Img";
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  Form,
  Input,
} from "react-aria-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const ModelPage = () => {
  const [sampleEveryMaxValue, setSampleEveryMaxValue] = useState(2000);
  const [saveEveryMaxValue, setSaveEveryMaxValue] = useState(16);
  const [isAdvancedField, setIsAdvancedField] = useState(false);
  const [tab, setTab] = useState("train");

  const docs = [
    {
      category: "Network Configuration",
      settings: [
        {
          name: "LoRA Rank",
          type: "integer",
          default: 16,
          description:
            "Specifies the rank for the LoRA (Low-Rank Adaptation) model. This controls the degree of parameter reduction in the linear layers. A higher value will preserve more information but use more memory.",
        },
        {
          name: "linear_alpha",
          type: "integer",
          default: 16,
          description:
            "A scaling factor for the rank. This value is often kept the same as `linear` to maintain a balanced parameter adjustment. Increasing it can help stabilize training.",
        },
      ],
    },
    {
      category: "Save Settings",
      settings: [
        {
          name: "save_every",
          type: "integer",
          default: 250,
          description:
            "The interval (in steps) at which the model checkpoints are saved. For example, if set to `250`, a model will be saved every 250 training steps.",
        },
        {
          name: "max_step_saves_to_keep",
          type: "integer",
          default: 5,
          description:
            "The maximum number of recent model checkpoints to keep. Older checkpoints will be automatically deleted once the limit is reached.",
        },
        {
          name: "hf_repo_id",
          type: "str",
          default: false,
          description:
            "Determines if the HF repository is private or public. Set to `True` to restrict access to authorized users only.",
        },
      ],
    },
    {
      category: "Dataset Settings",
      settings: [
        {
          name: "resolution",
          type: "str",
          default: "1024x768",
          description:
            "Resolution at which the input images are processed. Input must be in the format of `dimension1,dimension2`. For example, `1024,768` represents input images will be resized to 1024x1024 and 768x768",
        },
      ],
    },
    {
      category: "Training Configuration",
      settings: [
        {
          name: "batch_size",
          type: "integer",
          default: 1,
          description:
            "The number of samples per training batch. A larger batch size may speed up training but will require more memory.",
        },
        {
          name: "steps",
          type: "integer",
          default: 2000,
          description:
            "The total number of training steps. Adjust this based on the dataset size and desired accuracy.",
        },
        {
          name: "lr",
          type: "float",
          default: 0.0001,
          description:
            "The learning rate used during training. A lower value leads to slower but more stable learning, while a higher value might speed up training at the risk of instability.",
        },
      ],
    },
    {
      category: "Sampling Configuration",
      settings: [
        {
          name: "sample_every",
          type: "integer",
          default: 250,
          description:
            "The frequency (in steps) at which model samples are generated during training. Setting this value allows for periodic evaluations of model output.",
        },
        {
          name: "prompts",
          type: "str",
          default: "hot sweeny at the bar, hot sweeney at the prom night",
          description:
            "Text prompts that will be used for model sampling and generation primarily validation . These guide the generation of the sample outputs at specified intervals.",
        },
      ],
    },
    {
      category: "Model Configuration",
      settings: [
        {
          name: "quantize",
          type: "bool",
          default: false,
          description:
            "Enables model quantization, which reduces the model's memory footprint by using lower precision representations for weights. Useful for low-resource environments.",
        },
        {
          name: "low_vram",
          type: "bool",
          default: false,
          description:
            "Optimize the model for environments with limited VRAM (e.g., GPUs with less memory). Activating this may result in slower inference but allows for larger models to fit in memory.",
        },
      ],
    },
    {
      category: "Dataset Loading and HF Login",
      settings: [
        {
          name: "dataset_path",
          type: "str",
          default: "mlgawd/sydney-sweeny-lora_2",
          description:
            "The path to the dataset being used for training. Can be a local path or a reference to a dataset in a Hugging Face repository.",
        },
        {
          name: "token",
          type: "str",
          default: null,
          description:
            "The authentication token used to access private Hugging Face datasets or repositories. Leave blank for errors",
        },
      ],
    },
  ];

  const codeExamples = {
    json: `{
  "name": "example",
  "version": "1.0.0"
}`,
    js: `const example = () => {
  console.log("Hello, World!");
};`,
    php: `<?php
echo "Hello, World!";
?>`,
    node: `const http = require('http');
http.createServer((req, res) => {
  res.write('Hello, World!');
  res.end();
}).listen(8080);`,
    python: `print("Hello, World!")`,
    java: `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}`,
  };

  return (
    <div className="">
      <header className="p-7 pb-14 bg-white dark:bg-gray-800 sticky top-0">
        <div className="flex gap-5 justify-between items-center">
          <div className="flex gap-5 items-center">
            <Img className="size-7 text-[#005CF0]" />
            <h1 className="text-xl sm:text-2xl font-bold dark:text-white">
              Imagen / flux lora trainer
            </h1>
          </div>
          <button className="bg-[#005CF0] text-white text-sm sm:text-base rounded-lg px-3 py-2 sm:px-4 sm:py-2 font-semibold shadow-[#005CF0]/20 shadow-sm hover:bg-[#005CF0]/80 transition-all whitespace-nowrap flex justify-center items-center gap-2">
            Run
          </button>
        </div>
        <div className="absolute bottom-0 md:left-32 flex gap-2">
          <button
            onClick={() => setTab("train")}
            className={`py-1 px-4 border-l border-t border-r border-[#E5E7EB] dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all rounded-tr-md rounded-tl-md dark:text-white bg-white dark:bg-gray-800 ${
              tab === "train" && "!bg-[#f9f9f9] dark:!bg-gray-900"
            }`}
          >
            Train
          </button>
          <button
            onClick={() => setTab("docs")}
            className={`py-1 px-4 border-l border-t border-r border-[#E5E7EB] dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all rounded-tr-md rounded-tl-md dark:text-white bg-white dark:bg-gray-800 ${
              tab === "docs" && "!bg-[#f9f9f9] dark:!bg-gray-900"
            }`}
          >
            API Docs
          </button>
        </div>
      </header>

      {tab === "train" && (
        <Form className="max-w-3xl p-5 md:p-10 md:mx-20 space-y-7">
          {/*  */}
          <div className="space-y-2">
            <h2 className="font-bold flex justify-between items-center dark:text-white">
              <div>
                Huggingface Repository* (
                <span className="font-normal dark:font-light">string</span>)
              </div>
            </h2>
            <Input
              className="w-full py-2 px-2 border border-[#E5E7EB] dark:border-gray-600 focus:border-[#005CF0] dark:focus:border-[#005CF0] focus:outline-none bg-transparent rounded-md dark:bg-gray-700 dark:text-white"
              type="text"
              required
            />
            <p className="text-gray-600 text-sm dark:text-gray-400">
              <span className="font-bold dark:font-semibold">Description:</span>
              The Hugging Face (HF) repository ID where the model checkpoints
              will be uploaded. This must be a valid repository that the user
              has access to.
            </p>
          </div>
          {/*  */}
          <div className="space-y-2">
            <h2 className="font-bold flex justify-between items-center dark:text-white">
              <div>
                Huggingface Private* (
                <span className="font-normal dark:font-light">boolean</span>)
              </div>
              <div className="dark:text-gray-400">Default: False</div>
            </h2>
            <select
              className="w-full py-2 px-2 border border-[#E5E7EB] dark:border-gray-600 focus:border-[#005CF0] dark:focus:border-[#005CF0] focus:outline-none bg-transparent rounded-md dark:bg-gray-700 dark:text-white"
              defaultValue={"false"}
            >
              <option value="true">true</option>
              <option value="false">false</option>
            </select>

            <p className="text-gray-600 text-sm dark:text-gray-400">
              <span className="font-bold dark:font-semibold">Description:</span>{" "}
              The Hugging Face (HF) repository ID where the model checkpoints
              will be uploaded. This must be a valid repository that the user
              has access to.
            </p>
          </div>
          {/*  */}
          <div className="space-y-2">
            <h2 className="font-bold flex justify-between items-center dark:text-white">
              <div>
                Huggingface Token* (
                <span className="font-normal dark:font-light">string</span>)
              </div>
            </h2>
            <Input
              className="w-full py-2 px-2 border border-[#E5E7EB] dark:border-gray-600 focus:border-[#005CF0] dark:focus:border-[#005CF0] focus:outline-none bg-transparent rounded-md dark:bg-gray-700 dark:text-white"
              type="text"
              required
              placeholder="*******"
            />
            <p className="text-gray-600 text-sm dark:text-gray-400">
              <span className="font-bold dark:font-semibold">Description:</span>
              The Hugging Face (HF) repository ID where the model checkpoints
              will be uploaded. This must be a valid repository that the user
              has access to.
            </p>
          </div>
          {/*  */}
          <div className="space-y-2">
            <h2 className="font-bold flex justify-between items-center dark:text-white">
              <div>
                Huggingface Dataset Path* (
                <span className="font-normal dark:font-light">string</span>)
              </div>
            </h2>
            <Input
              className="w-full py-2 px-2 border border-[#E5E7EB] dark:border-gray-600 focus:border-[#005CF0] dark:focus:border-[#005CF0] focus:outline-none bg-transparent rounded-md dark:bg-gray-700 dark:text-white"
              type="text"
              required
              placeholder="mlgawd/sydney-sweeny-lora_2"
            />
            <p className="text-gray-600 text-sm dark:text-gray-400">
              <span className="font-bold dark:font-semibold">Description:</span>
              The path to the dataset being used for training. Can be a
              reference to a dataset in a Hugging Face repository.
            </p>
          </div>
          {/*  */}
          <div className="space-y-2">
            <h2 className="font-bold flex justify-between items-center dark:text-white">
              <div>
                LoRA Rank* (
                <span className="font-normal dark:font-light">integer</span>)
              </div>
              <div className="dark:text-gray-400">Default: 16</div>
            </h2>
            <div className="flex gap-2 items-center">
              <Input
                type="number"
                className="w-20 py-2 px-2 border border-[#E5E7EB] dark:border-gray-600 focus:border-[#005CF0] dark:focus:border-[#005CF0] focus:outline-none bg-transparent rounded-md dark:bg-gray-700 dark:text-white"
                value={2000}
              />
              <span className="dark:text-gray-400">0</span>
              <Input
                type="range"
                // value={2000}
                min={0}
                max={5000}
                className="w-full dark:bg-gray-700"
              />
              <span className="dark:text-gray-400">5000</span>
            </div>
            <p className="text-gray-600 text-sm dark:text-gray-400">
              <span className="font-bold dark:font-semibold">Description:</span>
              Specifies the rank for the LoRA (Low-Rank Adaptation) model. This
              controls the degree of parameter reduction in the linear layers. A
              higher value will preserve more information but use more memory.
            </p>
          </div>
          {/*  */}
          <div className="space-y-2">
            <h2 className="font-bold flex justify-between items-center dark:text-white">
              <div>
                Training Steps* (
                <span className="font-normal dark:font-light">integer</span>)
              </div>
              <div className="dark:text-gray-400">Default: 2000</div>
            </h2>
            <div className="flex gap-2 items-center">
              <Input
                type="number"
                className="w-20 py-2 px-2 border border-[#E5E7EB] dark:border-gray-600 focus:border-[#005CF0] dark:focus:border-[#005CF0] focus:outline-none bg-transparent rounded-md dark:bg-gray-700 dark:text-white"
                value={2000}
              />
              <span className="dark:text-gray-400">0</span>
              <Input
                type="range"
                // value={2000}
                min={0}
                onChange={(e) => {
                  setSampleEveryMaxValue(e.target.value);
                }}
                max={5000}
                className="w-full dark:bg-gray-700"
              />
              <span className="dark:text-gray-400">5000</span>
            </div>
            <p className="text-gray-600 text-sm dark:text-gray-400">
              <span className="font-bold dark:font-semibold">Description:</span>{" "}
              The total number of training steps. Adjust this based on the
              dataset size and desired accuracy.
            </p>
          </div>
          {/*  */}
          <div className="space-y-2">
            <h2 className="font-bold flex justify-between items-center dark:text-white">
              <div>
                Sample Every* (
                <span className="font-normal dark:font-light">integer</span>)
              </div>
              <div className="dark:text-gray-400">Default: 250</div>
            </h2>
            <div className="flex gap-2 items-center">
              <Input
                type="number"
                className="w-20 py-2 px-2 border border-[#E5E7EB] dark:border-gray-600 focus:border-[#005CF0] dark:focus:border-[#005CF0] focus:outline-none bg-transparent rounded-md dark:bg-gray-700 dark:text-white"
                value={2000}
              />
              <span className="dark:text-gray-400">0</span>
              <Input
                type="range"
                // value={2000}
                min={0}
                max={sampleEveryMaxValue}
                className="w-full dark:bg-gray-700"
              />
              <span className="dark:text-gray-400">{sampleEveryMaxValue}</span>
            </div>
            <p className="text-gray-600 text-sm dark:text-gray-400">
              <span className="font-bold dark:font-semibold">Description:</span>{" "}
              The frequency (in steps) at which model samples are generated
              during training. Setting this value allows for periodic
              evaluations of model output.
            </p>
          </div>
          {/*  */}
          <div className="space-y-2">
            <h2 className="font-bold flex justify-between items-center dark:text-white">
              <div>
                Validation prompts* (
                <span className="font-normal dark:font-light">string</span>)
              </div>
            </h2>
            <Input
              className="w-full py-2 px-2 border border-[#E5E7EB] dark:border-gray-600 focus:border-[#005CF0] dark:focus:border-[#005CF0] focus:outline-none bg-transparent rounded-md dark:bg-gray-700 dark:text-white"
              type="text"
              required
              placeholder="hot sweeny at the bar, hot sweeney at the prom night"
            />
            <p className="text-gray-600 text-sm dark:text-gray-400">
              <span className="font-bold dark:font-semibold">Description:</span>{" "}
              Text prompts that will be used for model sampling and generation
              primarily validation . These guide the generation of the sample
              outputs at specified intervals.
            </p>
          </div>
          {/*  */}
          <div className="space-y-2">
            <h2 className="font-bold flex justify-between items-center dark:text-white">
              <div>
                WandB API key* (
                <span className="font-normal dark:font-light">secret</span>)
              </div>
            </h2>
            <Input
              className="w-full py-2 px-2 border border-[#E5E7EB] dark:border-gray-600 focus:border-[#005CF0] dark:focus:border-[#005CF0] focus:outline-none bg-transparent rounded-md dark:bg-gray-700 dark:text-white"
              type="password"
              required
              placeholder="**********"
            />
            <p className="text-gray-600 text-sm dark:text-gray-400">
              <span className="font-bold dark:font-semibold">Description:</span>{" "}
              Weights and Biases API key, if you'd like to log training progress
              to W&B.
            </p>
          </div>
          {/*  */}
          <div className="space-y-2">
            <h2 className="font-bold flex justify-between items-center dark:text-white">
              <div>
                WandB Project* (
                <span className="font-normal dark:font-light">string</span>)
              </div>
              <div className="dark:text-gray-400">
                Default: "flux_train_modelslab"
              </div>
            </h2>
            <Input
              className="w-full py-2 px-2 border border-[#E5E7EB] dark:border-gray-600 focus:border-[#005CF0] dark:focus:border-[#005CF0] focus:outline-none bg-transparent rounded-md dark:bg-gray-700 dark:text-white"
              type="password"
              required
              placeholder="flux_train_modelslab"
            />
            <p className="text-gray-600 text-sm dark:text-gray-400">
              <span className="font-bold dark:font-semibold">Description:</span>{" "}
              Weights and Biases project name. Only applicable if wandb_api_key
              is set.
            </p>
          </div>
          {/*  */}
          <hr className="dark:border-gray-600" />
          {/*  */}
          <button
            type="button"
            className="text-left font-bold w-full dark:text-white"
            onClick={() => {
              setIsAdvancedField((prev) => !prev);
            }}
          >
            Advanced inputs
          </button>
          {isAdvancedField && (
            <div className="space-y-7">
              <div className="space-y-2">
                <h2 className="font-bold flex justify-between items-center dark:text-white">
                  <div>
                    LoRA alpha (
                    <span className="font-normal dark:font-light">integer</span>
                    )
                  </div>
                  <div className="dark:text-gray-400">Default: 16</div>
                </h2>
                <div className="flex gap-2 items-center">
                  <Input
                    type="number"
                    className="w-20 py-2 px-2 border border-[#E5E7EB] dark:border-gray-600 focus:border-[#005CF0] dark:focus:border-[#005CF0] focus:outline-none bg-transparent rounded-md dark:bg-gray-700 dark:text-white"
                    value={16}
                  />
                  <span className="dark:text-gray-400">0</span>
                  <Input
                    type="range"
                    min={0}
                    onChange={(e) => {
                      setSaveEveryMaxValue(e.target.value);
                    }}
                    max={256}
                    className="w-full dark:bg-gray-700"
                  />
                  <span className="dark:text-gray-400">256</span>
                </div>
                <p className="text-gray-600 text-sm dark:text-gray-400">
                  <span className="font-bold dark:font-semibold">
                    Description:
                  </span>{" "}
                  A scaling factor for the rank. This value is often kept the
                  same as `linear` to maintain a balanced parameter adjustment.
                  Increasing it can help stabilize training.
                </p>
              </div>
              {/*  */}
              <div className="space-y-2">
                <h2 className="font-bold flex justify-between items-center dark:text-white">
                  <div>
                    Save Every* (
                    <span className="font-normal dark:font-light">integer</span>
                    )
                  </div>
                  <div className="dark:text-gray-400">Default: 250</div>
                </h2>
                <div className="flex gap-2 items-center">
                  <Input
                    type="number"
                    className="w-20 py-2 px-2 border border-[#E5E7EB] dark:border-gray-600 focus:border-[#005CF0] dark:focus:border-[#005CF0] focus:outline-none bg-transparent rounded-md dark:bg-gray-700 dark:text-white"
                    value={2000}
                  />
                  <span className="dark:text-gray-400">0</span>
                  <Input
                    type="range"
                    // value={2000}
                    min={0}
                    max={saveEveryMaxValue}
                    className="w-full dark:bg-gray-700"
                  />
                  <span className="dark:text-gray-400">
                    {saveEveryMaxValue}
                  </span>
                </div>
                <p className="text-gray-600 text-sm dark:text-gray-400">
                  <span className="font-bold dark:font-semibold">
                    Description:
                  </span>{" "}
                  The interval (in steps) at which the model checkpoints are
                  saved. For example, if set to `250`, a model will be saved
                  every 250 training steps.
                </p>
              </div>
              {/*  */}
              <div className="space-y-2">
                <h2 className="font-bold flex justify-between items-center dark:text-white">
                  <div>
                    Resolution (
                    <span className="font-normal dark:font-light">string</span>)
                  </div>
                  <div className="dark:text-gray-400">Default: 1024,768</div>
                </h2>
                <div className="flex gap-2 items-center">
                  <Input
                    type="number"
                    className=" py-2 px-2 border border-[#E5E7EB] dark:border-gray-600 focus:border-[#005CF0] dark:focus:border-[#005CF0] focus:outline-none bg-transparent rounded-md dark:bg-gray-700 dark:text-white"
                    value={1024768}
                  />
                </div>
                <p className="text-gray-600 text-sm dark:text-gray-400">
                  <span className="font-bold dark:font-semibold">
                    Description:
                  </span>{" "}
                  Resolution at which the input images are processed. Input must
                  be in the format of `dimension1,dimension2`. For example,
                  `1024,768` represents input images will be resized to
                  1024x1024 and 768x768
                </p>
              </div>
              {/*  */}
              <div className="space-y-2">
                <h2 className="font-bold flex justify-between items-center dark:text-white">
                  <div>
                    Batch Size (
                    <span className="font-normal dark:font-light">integer</span>
                    )
                  </div>
                  <div className="dark:text-gray-400">Default: 1</div>
                </h2>
                <div className="flex gap-2 items-center">
                  <Input
                    type="number"
                    className="w-20 py-2 px-2 border border-[#E5E7EB] dark:border-gray-600 focus:border-[#005CF0] dark:focus:border-[#005CF0] focus:outline-none bg-transparent rounded-md dark:bg-gray-700 dark:text-white"
                    value={2000}
                  />
                  <span className="dark:text-gray-400">0</span>
                  <Input
                    type="range"
                    // value={2000}
                    min={0}
                    max={4}
                    className="w-full dark:bg-gray-700"
                  />
                  <span className="dark:text-gray-400">4</span>
                </div>
                <p className="text-gray-600 text-sm dark:text-gray-400">
                  <span className="font-bold dark:font-semibold">
                    Description:
                  </span>{" "}
                  The number of samples per training batch. A larger batch size
                  may speed up training but will require more memory.
                </p>
              </div>
              {/*  */}
              <div className="space-y-2">
                <h2 className="font-bold flex justify-between items-center dark:text-white">
                  <div>
                    Learning Rate (
                    <span className="font-normal dark:font-light">float</span>)
                  </div>
                  <h2 className="dark:text-gray-400">
                    (minimum: 0.0000001, maximum: 0.5)
                  </h2>
                </h2>
                <div className="flex gap-2 items-center">
                  <Input
                    type="number"
                    className="w-full py-2 px-2 border border-[#E5E7EB] dark:border-gray-600 focus:border-[#005CF0] dark:focus:border-[#005CF0] focus:outline-none bg-transparent rounded-md dark:bg-gray-700 dark:text-white"
                    min={0.0000001}
                    step={0.0000001}
                    max={0.5}
                  />
                </div>
                <p className="text-gray-600 text-sm dark:text-gray-400">
                  <span className="font-bold dark:font-semibold">
                    Description:
                  </span>{" "}
                  Resolution at which the input images are processed. Input must
                  be in the format of `dimension1,dimension2`. For example,
                  `1024,768` represents input images will be resized to
                  1024x1024 and 768x768
                </p>
              </div>
              {/*  */}
            </div>
          )}
        </Form>
      )}
      {tab === "docs" && (
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-5 p-5 md:p-10 md:mx-20">
          <ol className="list-inside list-decimal  space-y-10">
            {docs.map((info, _) => (
              <div key={_} className="space-y-4 dark:text-white">
                <li className="font-bold text-2xl text-gray-700 dark:text-gray-400">
                  {info.category}
                </li>
                {info.settings.map((setting, i) => (
                  <div className="space-y-2">
                    <h1 className="font-bold text-xl text-gray-800 dark:text-white">
                      {setting.name}(
                      <span className="font-normal">{setting.type}</span>)
                    </h1>
                    {setting.default && (
                      <div>
                        <span className="text-gray-800 dark:text-white font-bold ">
                          Default:
                        </span>{" "}
                        {setting.default}
                      </div>
                    )}
                    <div className="text-sm text-gray-700 dark:text-gray-400">
                      {setting.description}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </ol>
          <div>
            <h2 className="rounded-full dark:bg-gray-800 dark:border-gray-700 border py-1 px-4 dark:text-white">
              Endpoint:
            </h2>
            <Tabs className="border border-[#E5E7EB] dark:border-gray-600 rounded-xl p-3 mt-2">
              <TabList
                aria-label="lang"
                className="dark:text-white flex gap-2 mb-4"
              >
                <Tab
                  id="JSON"
                  className={({ isSelected }) =>
                    `${isSelected && "border-b-2 border-[#005CF0]"}`
                  }
                >
                  JSON
                </Tab>
                <Tab
                  id="JS"
                  className={({ isSelected }) =>
                    `${isSelected && "border-b-2 border-[#005CF0]"}`
                  }
                >
                  JS
                </Tab>
                <Tab
                  id="PHP"
                  className={({ isSelected }) =>
                    `${isSelected && "border-b-2 border-[#005CF0]"}`
                  }
                >
                  PHP
                </Tab>
                <Tab
                  id="Node"
                  className={({ isSelected }) =>
                    `${isSelected && "border-b-2 border-[#005CF0]"}`
                  }
                >
                  Node
                </Tab>
                <Tab
                  id="Python"
                  className={({ isSelected }) =>
                    `${isSelected && "border-b-2 border-[#005CF0]"}`
                  }
                >
                  Python
                </Tab>
                <Tab
                  id="Java"
                  className={({ isSelected }) =>
                    `${isSelected && "border-b-2 border-[#005CF0]"}`
                  }
                >
                  Java
                </Tab>
              </TabList>
              <TabPanel className="rounded-lg" id="JSON">
                <SyntaxHighlighter
                  showLineNumbers
                  className="dark:bg-gray-800 bg-white rounded-lg"
                  language="json"
                  style={docco}
                >
                  {codeExamples.json}
                </SyntaxHighlighter>
              </TabPanel>
              <TabPanel className="rounded-lg" id="JS">
                <SyntaxHighlighter
                  showLineNumbers
                  className="dark:bg-gray-800 bg-white rounded-lg"
                  language="javascript"
                  style={docco}
                >
                  {codeExamples.js}
                </SyntaxHighlighter>
              </TabPanel>
              <TabPanel className="rounded-lg" id="PHP">
                <SyntaxHighlighter
                  showLineNumbers
                  className="dark:bg-gray-800 bg-white rounded-lg"
                  language="php"
                  style={docco}
                >
                  {codeExamples.php}
                </SyntaxHighlighter>
              </TabPanel>
              <TabPanel className="rounded-lg" id="Node">
                <SyntaxHighlighter
                  showLineNumbers
                  className="dark:bg-gray-800 bg-white rounded-lg"
                  language="javascript"
                  style={docco}
                >
                  {codeExamples.node}
                </SyntaxHighlighter>
              </TabPanel>
              <TabPanel className="rounded-lg" id="Python">
                <SyntaxHighlighter
                  showLineNumbers
                  className="dark:bg-gray-800 bg-white rounded-lg"
                  language="python"
                  style={docco}
                >
                  {codeExamples.python}
                </SyntaxHighlighter>
              </TabPanel>
              <TabPanel className="rounded-lg" id="Java">
                <SyntaxHighlighter
                  showLineNumbers
                  className="dark:bg-gray-800 bg-white rounded-lg"
                  language="java"
                  style={docco}
                >
                  {codeExamples.java}
                </SyntaxHighlighter>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModelPage;
