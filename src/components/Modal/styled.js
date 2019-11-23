import styled from 'styled-components'

export const Base = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  margin-top: auto;
`

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  max-height: 90vh;
  width: 100%;
  max-width: 500px;
  z-index: 9997;
  box-shadow: rgba(0, 0, 0, 0.12) 4px 0px 16px;
  position: relative;
  border-radius: 4px;
  background: rgb(250, 250, 250);
  overflow: hidden;
  margin-right: ${props => props.offset}px;
`

export const Header = styled.div`
  border-bottom: 1px solid rgb(235, 236, 237);
  position: sticky;
  top: 0px;
  z-index: 9000;
  height: 62px;
  max-height: 62px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`

export const Body = styled.div`
  padding: ${props => props.padding || 0}px;
`

export const CloseDesktop = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
`
