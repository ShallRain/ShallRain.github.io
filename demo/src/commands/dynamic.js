const getTime = () => {
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  return `${hours}${minutes < 10 ? ':0' : ':'}${minutes}${seconds < 10 ? ':0' : ':'}${seconds}`
}

const introduction = [
  `欢迎来到 ShallRain 的花园`,
  {
    type: 'system',
    label: 'System',
    content: '谢谢你的到来，我先来介绍一下自己吧.'
  },
  {
    time: getTime(),
    type: 'info',
    label: '名字:',
    content: 'Shall Rain'
  },
  // {
  //   time: getTime(),
  //   type: 'info',
  //   label: '性别:',
  //   content: '女'
  // },
  // {
  //   time: getTime(),
  //   type: 'info',
  //   label: '年龄:',
  //   content: '28'
  // },
  {
    time: getTime(),
    type: 'info',
    label: '邮箱:',
    content: 'ShallRain@gmail.com'
  },
  {
    time: getTime(),
    type: 'info',
    label: '技能:',
    content: 'Design & Input & Output'
  },
  {
    type: 'black',
    label: '=> 1.',
    content: '日常抽风水瓶座.'
  },
  {
    type: 'black',
    label: '=> 2.',
    content: '喜欢狗狗、画画、咖啡.'
  },
  {
    type: 'black',
    label: '=> 3.',
    content: '有活力、独立思考，热爱生活.'
  },
   {
    type: 'black',
    label: '=> 4.',
    content: '做图很麻溜，人称“快女”.'
  }

]

export default {
  // 再次介绍我自己
  intro: {
    description: '再次介绍我自己',
    run(print) {
      let i = 0
      return new Promise(resolve => {
        const interval = setInterval(() => {
          print(introduction[i])
          i++
          if (!introduction[i]) {
            clearInterval(interval)
            resolve({ type: 'success', label: 'Done', content: 'Miracles happen every day!' })
          }
        }, 500)
      })
    }
  },
  // 新标签打开我的博客
  blog: {
    description: '在新标签打开我的博客',
    run(print) {
      return new Promise((resolve) => {
        print({ type: 'success', label: 'Success', content: 'Opening' })

        window.open('https://ShallRain.com/blog', '_blank')
        resolve({ type: 'success', label: 'Done', content: ':)' })
      })
    }
  },
  // 新标签页打开我的 resume
  resume: {
    description: '在新标签打开我的简历',
    run(print) {
      return new Promise((resolve) => {
        print({ type: 'success', label: 'Success', content: 'Opening' })

        window.open('https://ShallRain.com/blog/resume', '_blank')
        resolve({ type: 'success', label: 'Done', content: ':)' })
      })
    }
  },
  // 新标签页打开 2048 小游戏
  2048: {
    description: '在新标签打开 2048 小游戏',
    run(print) {
      return new Promise((resolve) => {
        print({ type: 'success', label: 'Success', content: 'Opening' })

        window.open('https://ShallRain.com/2048', '_blank')
        resolve({ type: 'success', label: 'Done', content: '游戏开始!' })
      })
    }
  }
    // echo: {
  //   description: 'Echoes input.',
  //   run(print, input) {
  //     return new Promise(resolve => {
  //       print({
  //         time: getTime(),
  //         label: 'Echo',
  //         type: 'success',
  //         content: input
  //       })
  //       resolve({ type: 'success', label: '', content: '' })
  //     })
  //   }
  // },

}
