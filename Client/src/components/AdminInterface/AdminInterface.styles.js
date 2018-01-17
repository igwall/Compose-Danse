import css from 'styled-jsx/css'
import constants from '../../constants'

export default css`
.host {
  height: 100%;
  width: 100%;
  background-color: ${constants.PRIMARY_COLOR};
  color: #fff;
  overflow: hidden; 
  display: flex;
  align-items: first-baseline;
  font-size: 20px;
}

.sidebar {
  height: 100%;
  width: 30%;
  min-width: 350px;
  padding: 0 15px;
  background: ${constants.SECONDARY_COLOR};
  overflow: auto;
}

.main {
  width: 70%;
  height: 100%;
  overflow: auto;
}

.title {
  padding: 20px 10px;
  font-size: 25px;
  font-weight: bold;
}

.panel {
  padding: 20px 20px;
  width: 100%;
}

.panel-title {
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 20px;
}

.panel-buttons {
  padding: 10px;
  width: 100%;
}

.button {
  font-size: 15px;
  padding: 10px 0;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
}

.button:hover {
  background: rgba(255,255,255,0.2);
}

.button-text {
}

.button-icon {
  padding: 0 20px;
}

`
