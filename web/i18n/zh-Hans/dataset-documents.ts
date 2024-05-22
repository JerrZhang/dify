const translation = {
  list: {
    title: '文档',
    desc: '知识库的所有文件都在这里显示，整个知识库都可以链接到  PTMIND.AI 引用或通过 Chat 插件进行索引。',
    addFile: '添加文件',
    addPages: '添加页面',
    table: {
      header: {
        fileName: '文件名',
        words: '字符数',
        hitCount: '召回次数',
        uploadTime: '上传时间',
        status: '状态',
        action: '操作',
      },
    },
    action: {
      uploadFile: '上传新文件',
      settings: '分段设置',
      addButton: '添加分段',
      add: '添加新分段',
      batchAdd: '批量添加',
      archive: '归档',
      unarchive: '撤销归档',
      delete: '删除',
      enableWarning: '归档的文件无法启用',
      sync: '同步',
    },
    index: {
      enable: '启用中',
      disable: '禁用中',
      all: '全部',
      enableTip: '该文件可以被索引',
      disableTip: '该文件无法被索引',
    },
    status: {
      queuing: '排队中',
      indexing: '索引中',
      paused: '已暂停',
      error: '错误',
      available: '可用',
      enabled: '已启用',
      disabled: '已禁用',
      archived: '已归档',
    },
    empty: {
      title: '还没有文档',
      upload: {
        tip: '您可以上传文件，从网站同步，或者从网络应用程序（如概念、GitHub 等）同步。',
      },
      sync: {
        tip: 'Dify 会定期从您的 Notion 中下载文件并完成处理。',
      },
    },
    delete: {
      title: '确定删除吗？',
      content: '如果您需要稍后恢复处理，您将从您离开的地方继续',
    },
    batchModal: {
      title: '批量添加分段',
      csvUploadTitle: '将您的 CSV 文件拖放到此处，或',
      browse: '选择文件',
      tip: 'CSV 文件必须符合以下结构：',
      question: '问题',
      answer: '回答',
      contentTitle: '分段内容',
      content: '内容',
      template: '下载模板',
      cancel: '取消',
      run: '导入',
      runError: '批量导入失败',
      processing: '批量处理中',
      completed: '导入完成',
      error: '导入出错',
      ok: '确定',
    },
  },
  metadata: {
    title: '元数据',
    desc: '标记文档的元数据允许 AI 及时访问它们并为用户公开参考来源。',
    dateTimeFormat: 'YYYY-MM-DD HH:mm',
    docTypeSelectTitle: '请选择一种文档类型',
    docTypeChangeTitle: '更换文档类型',
    docTypeSelectWarning: '如果更改文档类型，将不再保留现在填充的元数据',
    firstMetaAction: '开始',
    placeholder: {
      add: '输入',
      select: '选择',
    },
    source: {
      upload_file: '文件上传',
      notion: '从 Notion 同步的文档',
      github: '从 Github 同步的代码',
    },
    type: {
      book: '书籍',
      webPage: '网页',
      paper: '论文',
      socialMediaPost: '社交媒体帖子',
      personalDocument: '个人文档',
      businessDocument: '商务文档',
      IMChat: 'IM 聊天记录',
      wikipediaEntry: '维基百科条目',
      notion: '从 Notion 同步的文档',
      github: '从 Github 同步的代码',
      technicalParameters: '技术参数',
    },
    field: {
      processRule: {
        processDoc: '预处理文档',
        segmentRule: '分段规则',
        segmentLength: '分段长度',
        processClean: '文本预处理与清洗',
      },
      book: {
        title: '标题',
        language: '语言',
        author: '作者',
        publisher: '出版商',
        publicationDate: '出版日期',
        ISBN: 'ISBN',
        category: '类别',
      },
      webPage: {
        title: '标题',
        url: '网址',
        language: '语言',
        authorPublisher: '作者/出版商',
        publishDate: '发布日期',
        topicsKeywords: '主题/关键词',
        description: '描述',
      },
      paper: {
        title: '标题',
        language: '语言',
        author: '作者',
        publishDate: '发布日期',
        journalConferenceName: '期刊/会议名称',
        volumeIssuePage: '卷/期/页码',
        DOI: 'DOI',
        topicsKeywords: '主题/关键词',
        abstract: '摘要',
      },
      socialMediaPost: {
        platform: '平台',
        authorUsername: '作者/用户名',
        publishDate: '发布日期',
        postURL: '帖子网址',
        topicsTags: '主题/标签',
      },
      personalDocument: {
        title: '标题',
        author: '作者',
        creationDate: '创建日期',
        lastModifiedDate: '最后修改日期',
        documentType: '文档类型',
        tagsCategory: '标签/类别',
      },
      businessDocument: {
        title: '标题',
        author: '作者',
        creationDate: '创建日期',
        lastModifiedDate: '最后修改日期',
        documentType: '文档类型',
        departmentTeam: '部门/团队',
      },
      IMChat: {
        chatPlatform: '聊天平台',
        chatPartiesGroupName: '聊天参与方/群组名称',
        participants: '参与者',
        startDate: '开始日期',
        endDate: '结束日期',
        topicsKeywords: '主题/关键词',
        fileType: '文件类型',
      },
      wikipediaEntry: {
        title: '标题',
        language: '语言',
        webpageURL: '网页网址',
        editorContributor: '编辑/贡献者',
        lastEditDate: '最后编辑日期',
        summaryIntroduction: '摘要/介绍',
      },
      notion: {
        title: '标题',
        language: '语言',
        author: '作者',
        createdTime: '创建时间',
        lastModifiedTime: '最后修改时间',
        url: '网址',
        tag: '标签',
        description: '描述',
      },
      github: {
        repoName: '仓库名',
        repoDesc: '仓库描述',
        repoOwner: '仓库所有者',
        fileName: '文件名',
        filePath: '文件路径',
        programmingLang: '编程语言',
        url: '网址',
        license: '许可证',
        lastCommitTime: '最后提交时间',
        lastCommitAuthor: '最后提交者',
      },
      originInfo: {
        originalFilename: '原始文件名称',
        originalFileSize: '原始文件大小',
        uploadDate: '上传日期',
        lastUpdateDate: '最后更新日期',
        source: '来源',
      },
      technicalParameters: {
        segmentSpecification: '分段规则',
        segmentLength: '段落长度',
        avgParagraphLength: '平均段落长度',
        paragraphs: '段落数量',
        hitCount: '召回次数',
        embeddingTime: '嵌入时间',
        embeddedSpend: '嵌入花费',
      },
    },
    languageMap: {
      zh: '中文',
      en: '英文',
      es: '西班牙语',
      fr: '法语',
      de: '德语',
      ja: '日语',
      ko: '韩语',
      ru: '俄语',
      ar: '阿拉伯语',
      pt: '葡萄牙语',
      it: '意大利语',
      nl: '荷兰语',
      pl: '波兰语',
      sv: '瑞典语',
      tr: '土耳其语',
      he: '希伯来语',
      hi: '印地语',
      da: '丹麦语',
      fi: '芬兰语',
      no: '挪威语',
      hu: '匈牙利语',
      el: '希腊语',
      cs: '捷克语',
      th: '泰语',
      id: '印度尼西亚语',
    },
    categoryMap: {
      book: {
        fiction: '小说',
        biography: '传记',
        history: '历史',
        science: '科学',
        technology: '技术',
        education: '教育',
        philosophy: '哲学',
        religion: '宗教',
        socialSciences: '社会科学',
        art: '艺术',
        travel: '旅行',
        health: '健康',
        selfHelp: '自助',
        businessEconomics: '商业/经济',
        cooking: '烹饪',
        childrenYoungAdults: '儿童/青少年',
        comicsGraphicNovels: '漫画/图形小说',
        poetry: '诗歌',
        drama: '戏剧',
        other: '其他',
      },
      personalDoc: {
        notes: '笔记',
        blogDraft: '博客草稿',
        diary: '日记',
        researchReport: '研究报告',
        bookExcerpt: '书籍摘录',
        schedule: '日程安排',
        list: '列表',
        projectOverview: '项目概述',
        photoCollection: '照片集',
        creativeWriting: '创意写作',
        codeSnippet: '代码片段',
        designDraft: '设计草稿',
        personalResume: '个人简历',
        other: '其他',
      },
      businessDoc: {
        meetingMinutes: '会议纪要',
        researchReport: '研究报告',
        proposal: '提案',
        employeeHandbook: '员工手册',
        trainingMaterials: '培训材料',
        requirementsDocument: '需求文档',
        designDocument: '设计文档',
        productSpecification: '产品规格',
        financialReport: '财务报告',
        marketAnalysis: '市场分析',
        projectPlan: '项目计划',
        teamStructure: '团队结构',
        policiesProcedures: '政策和流程',
        contractsAgreements: '合同和协议',
        emailCorrespondence: '邮件往来',
        other: '其他',
      },
    },
  },
  embedding: {
    processing: '嵌入处理中...',
    paused: '嵌入已停止',
    completed: '嵌入已完成',
    error: '嵌入发生错误',
    docName: '预处理文档',
    mode: '分段规则',
    segmentLength: '分段长度',
    textCleaning: '文本预定义与清洗',
    segments: '段落',
    highQuality: '高质量模式',
    economy: '经济模式',
    estimate: '预估消耗',
    stop: '停止处理',
    resume: '恢复处理',
    automatic: '自动',
    custom: '自定义',
    previewTip: '段落预览将在嵌入完成后可用',
  },
  segment: {
    paragraphs: '段落',
    keywords: '关键词',
    addKeyWord: '添加关键词',
    keywordError: '关键词最大长度为 20',
    characters: '字符',
    hitCount: '召回次数',
    vectorHash: '向量哈希：',
    questionPlaceholder: '在这里添加问题',
    questionEmpty: '问题不能为空',
    answerPlaceholder: '在这里添加答案',
    answerEmpty: '答案不能为空',
    contentPlaceholder: '在这里添加内容',
    contentEmpty: '内容不能为空',
    newTextSegment: '新文本分段',
    newQaSegment: '新问答分段',
    delete: '删除这个分段？',
  },
}

export default translation
