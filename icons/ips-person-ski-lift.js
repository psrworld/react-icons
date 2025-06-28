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
export const IpsPersonSkiLiftIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-person-ski-lift ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-person-ski-lift" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M240 0c8.8 0 16 7.2 16 16l0 182.3-32 8.5L224 16c0-8.8 7.2-16 16-16zM64 80a48 48 0 1 1 96 0A48 48 0 1 1 64 80zm36.4 138c-14.2-30.8 8.3-66 42.2-66c18.2 0 34.8 10.7 42.3 27.3l28.8 63.4 55.9-14.9c25.4-6.8 50.3 12.4 50.3 38.6l0 122.1L443.1 343c12.6-4.6 20.9-16.6 20.9-30l0-1c0-13.3 10.7-24 24-24s24 10.7 24 24l0 1c0 33.5-20.9 63.4-52.3 75L128.3 510.5c-12.4 4.6-26.2-1.8-30.8-14.2s1.8-26.2 14.2-30.8L256 412.2l0-114.5-66.7 17.8c-22.6 6-46.2-5.1-55.9-26.3L100.4 218zM45.7 189.6l65 135.8c8.3 17.4 28 26.4 46.6 21.3l36.5-9.9c12.8-3.5 26 4.1 29.5 16.8s-4.1 26-16.8 29.5l-36.5 9.9c-41 11.2-84.2-8.6-102.5-46.9L2.3 210.4c-5.7-12-.7-26.3 11.3-32s26.3-.7 32 11.3z" })] })));
};
export default IpsPersonSkiLiftIcon;
//# sourceMappingURL=ips-person-ski-lift.js.map