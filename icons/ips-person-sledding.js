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
export const IpsPersonSleddingIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-person-sledding ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-person-sledding" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M400 128a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM35.1 226.7c-11.8-6.1-26.3-1.5-32.4 10.2s-1.5 26.3 10.2 32.4L396.4 468.4c27.3 14.2 59.7 14.4 87.2 .7l15.2-7.6c11.9-5.9 16.7-20.3 10.7-32.2s-20.3-16.7-32.2-10.7l-15.2 7.6c-13.7 6.9-29.9 6.7-43.6-.3l-41.7-21.6c4.5-5.5 7.2-12.5 7.2-20.2l0-80c0-26.5-21.5-48-48-48l-34.7 0L361 196.3c25.2-25.2 7.4-68.3-28.3-68.3L160 128c-17.7 0-32 14.3-32 32s14.3 32 32 32l84 0-59.2 40.3c-23.6 16.1-26 44.8-13.8 64.9L35.1 226.7zM320 320l0 54.6L214.7 320 320 320z" })] })));
};
export default IpsPersonSleddingIcon;
//# sourceMappingURL=ips-person-sledding.js.map