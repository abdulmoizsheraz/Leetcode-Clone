import React from 'react';
import Split from 'react-split';
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import LanguageSelectNav from './LanguageSelectNav';
const Playground = () => {
  return (
    <div className='flex  flex-col relative overflow-x-hidden  '>
<LanguageSelectNav/>
<Split className='h-[calc(100vh-94px)]' direction='vertical' sizes={[60, 40]} minSize={60}>
        <div className='w-full overflow-auto bg-dark-300'>
          <CodeMirror
            theme={vscodeDark}
            extensions={[javascript()]}
            options={{
              mode: "javascript",
              theme: "vscode-dark",
              lineNumbers: true,
              scrollbarStyle: "overlay",
            }}
          />
        </div>
        {/* Test Cases */}
        <div className='w-full px-5 overflow-auto text-white'>
         
          <div className='flex h-10 items-center space-x-6'>
            <div className='relative flex h-full flex-col justify-center cursor-pointer'>
              <div className='text-sm font-medium leading-5 text-white'>Testcases</div>
              <hr className='absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white' />
            </div>
          </div>
    <div className='flex mt-3 '>
      <span className='code m-2 cursor-pointer '>Case 1</span>
      <span className='code m-2 cursor-pointer '>Case 2</span>
      <span className='code m-2 cursor-pointer '>Case 3</span>
    </div>
        </div>
      </Split>
    </div>
  );
};

export default Playground;
