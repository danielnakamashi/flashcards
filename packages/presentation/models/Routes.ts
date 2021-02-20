const Routes = Object.freeze({
  home: () => '/',
  login: () => '/login',
  topic: (topicId: string) => `/topic/${topicId}`,
  topicStudy: (topicId: string) => `/topic/${topicId}/study`,
})

export { Routes }
