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
export const IpsBowlHotIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-bowl-hot ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-bowl-hot" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M152 0c-13.3 0-24 10.7-24 24l0 8c0 32.7 15.4 63.6 41.6 83.2C183.7 125.8 192 142.4 192 160l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8c0-32.7-15.4-63.6-41.6-83.2C184.3 66.2 176 49.6 176 32l0-8c0-13.3-10.7-24-24-24zM33.6 224C15.4 224 .9 239.3 2 257.5c5.4 91.7 59.7 169.7 136.4 209.7l1.2 9.7c2.5 20 19.5 35 39.7 35l153.4 0c20.2 0 37.2-15 39.7-35l1.2-9.7c76.8-40 131-118 136.4-209.7c1.1-18.2-13.4-33.5-31.6-33.5L33.6 224zM304 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 8c0 32.7 15.4 63.6 41.6 83.2C311.7 125.8 320 142.4 320 160l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8c0-32.7-15.4-63.6-41.6-83.2C312.3 66.2 304 49.6 304 32l0-8z" })] })));
};
export default IpsBowlHotIcon;
//# sourceMappingURL=ips-bowl-hot.js.map