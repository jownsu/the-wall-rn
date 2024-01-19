import Svg, { LocalSvg, Path } from "react-native-svg";
let cancel_icon = require("../../../../assets/icons/cancel_icon.svg");
let active_message = require("../../../../assets/icons/active_message_icon.svg");
let trash = require("../../../../assets/icons/delete_icon.svg");
let edit = require("../../../../assets/icons/edit_icon.svg");
let no_message = require("../../../../assets/icons/no_message.svg");
let user = require("../../../../assets/icons/user_icon.svg");

export const Cancel = (props) => (
    <LocalSvg 
        {...props}
        asset={cancel_icon}
        height={25}
        width={25}
    />
)

export const ActiveMessage = (props) => (
    <LocalSvg 
        {...props}
        asset={active_message}
        height={25}
        width={25}
    />
)
export const Trash = (props) => (
    <LocalSvg 
        {...props}
        asset={trash}
        height={25}
        width={25}
    />
)
export const Edit = (props) => (
    <LocalSvg 
        {...props}
        asset={edit}
        height={25}
        width={25}
    />
)
export const MessageIcon = ({is_active = false}) => (
    <Svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path fill-rule="evenodd" clip-rule="evenodd" d="M18.5039 16.5029H11.4995L7.49699 19.5047V16.5029H5.49574C4.94311 16.5029 4.49512 16.0549 4.49512 15.5022V5.49599C4.49512 4.94336 4.94311 4.49536 5.49574 4.49536H18.5039C19.0565 4.49536 19.5045 4.94336 19.5045 5.49599V15.5022C19.5045 16.0549 19.0565 16.5029 18.5039 16.5029Z" stroke={is_active ? "#2c6bff" : "#5E6871"} stroke-width="1.5"/>
        <Path d="M7.49707 8.99829H16.5027" stroke={is_active ? "#2c6bff" : "#5E6871"} stroke-width="1.5"/>
        <Path d="M7.49707 12H14.5014" stroke={is_active ? "#2c6bff" : "#5E6871"} stroke-width="1.5"/>
    </Svg>
)

export const NoMessage = (props) => (
    <LocalSvg 
        {...props}
        asset={no_message}
        height={50}
        width={50}
    />
)
export const User = (props) => (
    <LocalSvg 
        {...props}
        asset={user}
        height={25}
        width={25}
    />
)