import scrollLock from 'scroll-lock'

export const enableScroll = () => {
  scrollLock.enablePageScroll()
}

export const disableScroll = () => {
  scrollLock.disablePageScroll()
}
