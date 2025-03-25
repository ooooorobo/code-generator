// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = {
    prompt: ({prompter, args}) => prompter.prompt({
        type: 'input', name: 'componentName', message: '컴포넌트의 이름을 입력해주세요'
    }).then(({componentName}) => prompter.prompt({
        type: 'toggle', name: 'needInsertIndex', message: 'index.ts에 컴포넌트 export를 추가할까요?'
    }).then(({needInsertIndex}) => {
        return {
            componentName, needInsertIndex
        }
    }))
}
