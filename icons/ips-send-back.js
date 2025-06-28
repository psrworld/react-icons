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
export const IpsSendBackIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-send-back ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-send-back" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M192 64l0 128L64 192 64 64l128 0zM64 0C28.7 0 0 28.7 0 64L0 192c0 35.3 28.7 64 64 64l128 0c35.3 0 64-28.7 64-64l0-128c0-35.3-28.7-64-64-64L64 0zM576 320l0 128-128 0 0-128 128 0zM448 256c-35.3 0-64 28.7-64 64l0 128c0 35.3 28.7 64 64 64l128 0c35.3 0 64-28.7 64-64l0-128c0-35.3-28.7-64-64-64l-128 0zM160 288l0 64c0 35.3 28.7 64 64 64l128 0 0-96c0-53 43-96 96-96l32 0 0-64c0-35.3-28.7-64-64-64L288 96l0 96c0 53-43 96-96 96l-32 0z" })] })));
};
export default IpsSendBackIcon;
//# sourceMappingURL=ips-send-back.js.map