export default function (plop) {
  // create your generators here
  plop.setGenerator('basics', {
    description: 'this is a skeleton plopfile',
    prompts: [], // array of inquirer prompts
    actions: [], // array of actions
  });

  plop.setGenerator('component', {
    description: '컴포넌트 한 번에 만들기',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: '컴포넌트 이름을 입력해 주세요',
      },
      {
        type: 'confirm',
        name: 'needInsertIndex',
        message: 'index.ts 파일에 추가할까요?',
      },
    ],
    actions: (data) => {
      const name = data.componentName;
      const needInsertIndex = data.needInsertIndex;
      console.log(needInsertIndex);

      const actions = [
        {
          type: 'add',
          path: `src/components/${name}/${name}.tsx`,
          templateFile: 'plop-templates/components/component.hbs',
        },
        {
          type: 'add',
          path: `src/components/${name}/${name}.module.css`,
          templateFile: 'plop-templates/components/style.hbs',
        },
        {
          type: 'add',
          path: `src/components/${name}/${name}.stories.ts`,
          templateFile: 'plop-templates/components/story.hbs',
        },
      ];

      if (needInsertIndex) {
        [
          {
            type: 'add',
            skipIfExists: true,
            path: 'src/components/index.ts',
            templateFile: 'plop-templates/components/index.hbs',
          },
          {
            type: 'append',
            path: 'src/components/index.ts',
            templateFile: 'plop-templates/components/index.hbs',
          },
        ].forEach((action) => actions.push(action));
      }

      return actions;
    },
  });
}
