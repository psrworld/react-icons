var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const IpsUserCrownIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-user-crown ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-user-crown" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M144 128l0 16c0 44.2 35.8 80 80 80s80-35.8 80-80l0-16-160 0zm0-108.8c10.2 7.5 23.8 8.3 34.9 2L209.1 4c4.6-2.6 9.7-4 14.9-4s10.4 1.4 14.9 4l30.2 17.2c11 6.3 24.7 5.5 34.9-2l.1-.1c.3-.2 .6-.4 .8-.6l3-2.4L323.6 3.5c2.8-2.3 6.4-3.5 10-3.5L336 0c8.8 0 16 7.2 16 16l0 23 0 3.2c0 0 0 .1 0 .1L352 144c0 70.7-57.3 128-128 128s-128-57.3-128-128L96 42.3c0 0 0-.1 0-.1L96 39l0-23c0-8.8 7.2-16 16-16l2.4 0c3.6 0 7.2 1.2 10 3.5L140 16l3 2.4c.3 .2 .6 .4 .8 .6l.1 .1zM0 472c0-92.8 75.2-168 168-168l112 0c92.8 0 168 75.2 168 168l0 8c0 17.7-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32l0-8z" })] })));
};
export default IpsUserCrownIcon;
//# sourceMappingURL=ips-user-crown.js.map