## Accordion Question

手风琴组件，点击问题可以查看或收起回答。
![](/public/Screenshot.png)

## Step

1. 从 `data.js` 中把数据（问题数组）导入项目
2. 用 `useState` 将数据（问题数组）存入状态变量
3. 遍历数组，为数组中的每一个 Object 元素加载 `SingleQuestion` 组件
4. 在  `SingleQuestion` 组件中，展示问题文本和用来 toggle 的按钮
5. 定义一个函数来切换 `showAnswer` 的值（true/false）
6. 追踪当前选中的问题在数组中的索引
7. 定义一个函数更新状态变量来反映选中的问题索引
8. 用选中的问题索引来加载对应的 `SingleQuestion` 组件。

## My Error

1. 总是在遍历组件的时候忘记 `return`
   ```jsx
    <section>
      <h1>Questions</h1>
      {questions.map((question) => {
        return <SingleQuestion key={question.id} {...question} />;
      })}
    </section>
   ```
2. 在 toggle 状态的时候，总是忘记要用 `setState()` 
   ```jsx
   <button onClick={() => setShowAnser(!showAnswer)}>
  </button>
   ```