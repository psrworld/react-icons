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
export const IpsBanBugIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-ban-bug ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-ban-bug" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M256 448C150 448 64 362 64 256c0-41.5 13.1-79.9 35.5-111.2L367.2 412.5C335.9 434.9 297.5 448 256 448zm89-148.3l19.9 4c8.7 1.7 17.1-3.9 18.8-12.6s-3.9-17.1-12.6-18.8l-35.1-7 0-18.6 35.1-7c8.7-1.7 14.3-10.2 12.6-18.8s-10.2-14.3-18.8-12.6l-29.5 5.9c-1.1-9.2-3.8-17.8-7.7-25.8l24.5-14.7c7.6-4.5 10-14.4 5.5-22s-14.4-10-22-5.5L307.8 163c-14-11.9-32.1-19-51.8-19c-18.7 0-35.9 6.4-49.6 17.2L144.8 99.5C176.1 77.1 214.5 64 256 64c106 0 192 86 192 192c0 41.5-13.1 79.9-35.5 111.2L345 299.7zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM140.9 272.3c-8.7 1.7-14.3 10.2-12.6 18.8s10.2 14.3 18.8 12.6l29.5-5.9c1.1 9.2 3.8 17.8 7.7 25.8l-24.5 14.7c-7.6 4.5-10 14.4-5.5 22s14.4 10 22 5.5L204.2 349c14 11.9 32.1 19 51.8 19c6.6 0 13-.8 19.2-2.3L175 265.5l-34.1 6.8z" })] })));
};
export default IpsBanBugIcon;
//# sourceMappingURL=ips-ban-bug.js.map