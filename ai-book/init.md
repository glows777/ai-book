# 1. **LLM、Agent、Workflow傻傻分不清？一篇讲明白**

# **随着AI的发展，越来越多新概念冒出来了。**

很多同学，包括过去的我自己，对这些名词都是一知半解。今天，我就用最简单的方式，把几个常见概念讲明白。

## **🤖 LLM：大语言模型**

LLM，全称 **Large Language Model**（大语言模型）。

国外常见的有 ChatGPT、Claude、Gemini，国内的有 DeepSeek、Kimi、豆包、通义千问等等。

**简单理解**：它就是一个超强问答机器人。你问它问题，它能给你答案。比如你饿了，问它“给我推荐个菜谱”，它就会生成一个菜谱，但做菜还得靠你自己。

**专业一点的解释**：LLM 的核心原理是 **通过预测下一个词来生成文本**。它不仅能做问答，还能写文章、翻译、生成代码、总结文档等。问答只是 LLM 最常见的应用形式。

👉 **一句话总结**：LLM 会“说”，但不会“做”。

## **🤖 Agent：智能体**

前面我们说到，LLM 只能回答问题。那如果它还能自己调用工具、执行操作呢？

这就是 **Agent**。

**简单理解**：Agent = 带“手脚”的 LLM。

比如你饿了，对 Agent 说“帮我找附近餐馆并点外卖”。

普通 LLM 只能给你餐馆名单，而 Agent 能帮你直接下单。

其实 Siri、小爱同学、车载语音助手都是早期的 Agent，只是功能比较有限。

现在的 Agent 更强大了，它能 **自己思考步骤 → 执行 → 接收反馈 → 修正再执行**，越来越像一个私人秘书。

**专业一点的解释**：Agent = **LLM + 记忆 + 工具调用 + 规划与执行能力**。

它和 LLM 最大的区别是，Agent 不仅能生成语言，还能做出决策和动作，把结果落实到现实系统里。

 结论：**Agent = 会“思考和操作”的助手**。

## **🔄 Workflow：工作流**

Workflow（工作流）的核心是 **编排**。

- **Agent**：自己想、自己搭建流水线、自己全程执行。
- **Workflow**：我们提前设定好步骤，AI只在关键环节介入。

举个例子：

我想每天自动在社交平台发布最新的 AI 资讯：

- 步骤A：打开社交平台
- 步骤B：AI 搜索并整理资讯
- 步骤C：自动发布

其中 A 和 C 其实不需要 AI，只在 B 需要它。

这样能减少资源浪费，也更高效。

**专业一点的解释**：Workflow 是一种 **流程编排（orchestration）**，它能把多个步骤、多个 Agent、甚至外部 API 组合在一起运行。它适合固定、可预测的任务，而 Agent 更适合处理开放性、不确定的任务。

结论：**Workflow = 人设定流程，AI在关键环节帮忙。**

## **📝 总结**

- **LLM**：只会回答问题的机器人
- **Agent**：能理解需求并实际操作的私人秘书
- **Workflow**：像流水线一样的自动化流程，人设定、AI参与

## **📚 参考文献**

1. A Developer’s Guide to Building Scalable AI Workflows vs Agents. *Towards Data Science.*
    
    https://towardsdatascience.com/a-developers-guide-to-building-scalable-ai-workflows-vs-agents/
    
2. **Anthropic. (2024). Building effective agents.**
    
    https://www.anthropic.com/engineering/building-effective-agents
    
3. **AI Agents — Introduction, Workflows and Application** · *Medium* by Sulbha Jain
    
    https://medium.com/@sulbha.jindal/ai-agents-introduction-workflows-and-application-c96ea73559cc
    

今天的科普是入门版，后面如果大家有兴趣，我会再写一篇更硬核的“Agent vs Workflow”对比。