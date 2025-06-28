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
export const IpsSealQuestionIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-seal-question ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-seal-question" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M222.1 17.9c18.7-18.7 49.1-18.7 67.9 0L336 64l64 0c26.5 0 48 21.5 48 48l0 64 45.6 45.6c18.7 18.7 18.7 49.1 0 67.9L448 335.1l0 64.9c0 26.5-21.5 48-48 48l-64.9 0-45.1 45.1c-18.7 18.7-49.1 18.7-67.9 0L176.9 448 112 448c-26.5 0-48-21.5-48-48l0-64.9L18.4 289.5c-18.7-18.7-18.7-49.1 0-67.9L64 176l0-64c0-26.5 21.5-48 48-48l64 0 46.1-46.1zM169.8 165.3l-.4 1.2c-4.4 12.5 2.1 26.2 14.6 30.6s26.2-2.1 30.6-14.6l.4-1.2c1.1-3.2 4.2-5.3 7.5-5.3l58.3 0c8.4 0 15.1 6.8 15.1 15.1c0 5.4-2.9 10.4-7.6 13.1l-44.3 25.4c-7.5 4.3-12.1 12.2-12.1 20.8l0 13.5c0 13.3 10.7 24 24 24c13.1 0 23.8-10.5 24-23.6l32.3-18.5c19.6-11.3 31.7-32.2 31.7-54.8c0-34.9-28.3-63.1-63.1-63.1l-58.3 0c-23.7 0-44.8 14.9-52.8 37.3zM288 352a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" })] })));
};
export default IpsSealQuestionIcon;
//# sourceMappingURL=ips-seal-question.js.map