// tslint:disable:max-line-length
import React from 'react'

import StatusIcon from '_utils/icon/status'

export const Crew = (props: Icon) => (
  <StatusIcon {...props}>
    <path
      d="M14.592 9.775c1.229 0 2.224.996 2.224 2.225v5.184a.497.497 0 01-.496.496h-1.232v3.823a.497.497 0 01-.407.489l-.09.008H9.409a.497.497 0 01-.497-.497v-4.687h-1.23a.497.497 0 01-.49-.407l-.007-.09V12c0-1.229.995-2.225 2.224-2.225zm0 .994H9.408c-.68 0-1.23.55-1.23 1.231l-.001 3.822h1.231c.244 0 .447.177.489.408l.008.09v4.686h4.19v-3.822c0-.244.176-.447.407-.49l.09-.007h1.23V12a1.23 1.23 0 00-1.104-1.225l-.126-.006zm-9.503-.994a.497.497 0 01.089.986l-.09.008h-.863A1.23 1.23 0 003 11.874L2.994 12l-.001 3.822h1.232c.243 0 .446.177.488.408l.008.09v2.959h2.095c.244 0 .447.175.49.407l.007.09a.497.497 0 01-.407.488l-.09.008H4.225a.497.497 0 01-.49-.407l-.007-.09-.001-2.96-1.23.001a.497.497 0 01-.489-.407L2 16.319V12c0-1.176.91-2.138 2.066-2.219l.159-.006h.864zm14.686 0c1.176 0 2.138.911 2.22 2.066L22 12v4.32a.497.497 0 01-.407.488l-.09.008h-1.23v2.96a.497.497 0 01-.408.488l-.09.008h-2.591a.497.497 0 01-.09-.985l.09-.008h2.095v-2.96c0-.243.175-.446.407-.488l.09-.008h1.23V12a1.23 1.23 0 00-1.105-1.225l-.126-.006h-.864a.497.497 0 01-.089-.986l.09-.008h.863zM5.09 3.728c1.16 0 2.123.892 2.218 2.063l.006.161A2.228 2.228 0 015.25 8.171l-.161.006A2.228 2.228 0 012.87 6.114l-.006-.162c0-1.16.892-2.123 2.063-2.218zM12 2a3.092 3.092 0 013.083 2.91l.006.179a3.092 3.092 0 01-2.91 3.083L12 8.177a3.092 3.092 0 01-3.083-2.91L8.91 5.09a3.092 3.092 0 012.91-3.084zm6.911 1.728l.182.007a2.228 2.228 0 012.043 2.238l-.007.161a2.228 2.228 0 01-2.238 2.043l-.161-.007a2.228 2.228 0 01-2.043-2.238l.007-.161a2.224 2.224 0 012.217-2.043zM5.097 4.72l-.11.005a1.227 1.227 0 00-1.13 1.207l.005.122c.051.636.584 1.13 1.207 1.13l.121-.005a1.227 1.227 0 001.13-1.206l-.004-.122a1.23 1.23 0 00-1.219-1.13zm13.805 0l-.117.008a1.225 1.225 0 00-1.1 1.103l-.005.121c0 .643.494 1.176 1.11 1.226l.121.006c.643 0 1.176-.494 1.226-1.11l.006-.122c0-.642-.494-1.175-1.11-1.225l-.131-.007zm-6.896-1.727l-.139.005a2.092 2.092 0 00-1.962 2.075l.004.149a2.092 2.092 0 002.076 1.962l.148-.005a2.092 2.092 0 001.962-2.075l-.004-.148a2.095 2.095 0 00-2.085-1.963z"
      fill={props.iconColor}
      fillRule="nonzero"
    />
  </StatusIcon>
)

Crew.defaultProps = StatusIcon.defaultProps

export default React.memo(Crew)
