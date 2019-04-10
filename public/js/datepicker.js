!(function(e, t) {
  "object" === typeof exports && "object" === typeof module
    ? (module.exports = t())
    : "function" === typeof define && define.amd
    ? define([], t)
    : "object" === typeof exports
    ? (exports.datepicker = t())
    : (e.datepicker = t());
})(window, function() {
  return (function(e) {
    var t = {};

    function n(s) {
      if (t[s]) {
        return t[s].exports;
      }
      var i = (t[s] = {
        i: s,
        l: !1,
        exports: {}
      });
      return e[s].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function(e, t, s) {
        n.o(e, t) ||
          Object.defineProperty(e, t, {
            enumerable: !0,
        get: s
          });
      }),
      (n.r = function(e) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }),
          Object.defineProperty(e, "__esModule", {
        value: !0
          });
      }),
      (n.t = function(e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) {
          return e;
        }
      if (4 & t && "object" === typeof e && e && e.__esModule) {
          return e;
        }
        var s = Object.create(null);
        if (
          (n.r(s),
          Object.defineProperty(s, "default", {
            enumerable: !0,
        value: e
          }),
          2 & t && "string" !== typeof e)
        )
          for (var i in e) {
            n.d(
              s,
              i,
              function(t) {
          return e[t];
        }.bind(null, i));}
        return s;
      }),
      (n.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
      };
        return n.d(t, "a", t), t;
      }),
      (n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ""),
      n((n.s = 0))
    );
  })([
    function(e, t, n) {
      e.exports = n(1);
    },
  function(e, t, n) {
      n(2);
    let s = [];
    const i = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        a = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        o = {
        t: "top",
          r: "right",
        b: "bottom",
          l: "left",
        c: "centered"
        },
      r = ["click", "focusin", "keydown", "input"];

    function l(e) {
        return Array.isArray(e)
          ? e.map(l)
          : "[object Object]" === {}.toString.call(e)
          ? Object.keys(e).reduce((t, n) => ((t[n] = l(e[n])), t), {})
          : e;
      }

    function c(e, t) {
      const n = t.calendar.querySelector(".qs-overlay"),
        s = n && !n.classList.contains("qs-hidden");
        (t.calendar.innerHTML = [
          (function(e, t, n) {
            return `\n    <div class="qs-controls ${
              n ? "qs-blur" : ""
            }">\n      <div class="qs-arrow qs-left"></div>\n      <div class="qs-month-year">\n        <span class="qs-month">${
              t.months[e.getMonth()]
            }</span>\n        <span class="qs-year">${e.getFullYear()}</span>\n      </div>\n      <div class="qs-arrow qs-right"></div>\n    </div>\n  `;
          })(e, t, s),
          (function(e, t, n) {
            const {
            currentMonth: s,
            currentYear: i,
                dateSelected: a,
            maxDate: o,
            minDate: r,
                days: l,
            disabledDates: c,
            disabler: d,
                noWeekends: u,
            startDay: h,
            weekendIndices: f
              } = t,
              y = new Date(),
              p = i === y.getFullYear() && s === y.getMonth(),
              b = m(new Date(e).setDate(1)),
              v = b.getDay() - h,
              q = v < 0 ? 7 : 0;
        b.setMonth(b.getMonth() + 1), b.setDate(0);
            const g = b.getDate(),
          D = [];
            let w = q + 7 * (((v + g) / 7) | 0);
            (w += (v + g) % 7 ? 7 : 0), 0 !== h && 0 === v && (w += 7);
            for (let e = 1; e <= w; e++) {
              const t = (e - 1) % 7,
            n = l[t],
            h = e - (v >= 0 ? v : 7 + v),
                m = new Date(i, s, h),
            b = h < 1 || h > g;
          let q = "",
            w = `<span class="qs-num">${h}</span>`;
              if (b) {
                (q = "qs-empty"), (w = "");
              } else {
                let e =
                  (r && m < r) || (o && m > o) || (d && d(m)) || c.includes(+m);
            const n = f.includes(t),
                  s = p && !e && h === y.getDate();
                q = (e = e || (u && n)) ? "qs-disabled" : s ? "qs-current" : "";
              }
              +m != +a || b || (q += " qs-active"),
                D.push(`<div class="qs-square qs-num ${n} ${q}">${w}</div>`);
        }
            const S = l
              .map(e => `<div class="qs-square qs-day">${e}</div>`)
              .concat(D);
            if (S.length % 7 != 0) {
              throw "Calendar not constructed properly. The # of squares should be a multiple of 7.";
            }
            return (
              S.unshift(`<div class="qs-squares ${n ? "qs-blur" : ""}">`),
              S.push("</div>"),
              S.join("")
            );
          })(e, t, s),
          (function(e, t) {
            const { overlayPlaceholder: n, overlayButton: s } = e;
            return `\n    <div class="qs-overlay ${
              t ? "" : "qs-hidden"
            }">\n      <div class="qs-close">&#10005;</div>\n      <input class="qs-overlay-year" placeholder="${n}" />\n      <div class="qs-submit qs-disabled">${s}</div>\n    </div>\n  `;
          })(t, s)
        ].join("")),
          s && setTimeout(() => b(!0, t), 10);
      }

    function d(e, t, n) {
        const {
          currentMonth: s,
            currentYear: i,
            calendar: a,
          el: o,
            onSelect: r
          } = t,
          l = a.querySelector(".qs-active"),
          c = e.textContent;
        (t.dateSelected = n ? void 0 : new Date(i, s, c)),
          l && l.classList.remove("qs-active"),
          n || e.classList.add("qs-active"),
          u(o, t, n),
          !n && y(t),
          r && r(t, n ? void 0 : new Date(t.dateSelected));
    }

    function u(e, t, n) {
        if (!t.nonInput) {
          return n
            ? (e.value = "")
            : t.formatter
            ? t.formatter(e, t.dateSelected, t)
            : void (e.value = t.dateSelected.toDateString());
        }
    }

    function h(e, t, n) {
        n
          ? (t.currentYear = n)
          : ((t.currentMonth += e.contains("qs-right") ? 1 : -1),
            12 === t.currentMonth
              ? ((t.currentMonth = 0), t.currentYear++)
              : -1 === t.currentMonth &&
                ((t.currentMonth = 11), t.currentYear--)),
          (t.currentMonthName = t.months[t.currentMonth]),
          c(new Date(t.currentYear, t.currentMonth, 1), t),
          t.onMonthChange && t.onMonthChange(t);
    }

    function f(e) {
        return (
          "[object Date]" === {}.toString.call(e) &&
          "Invalid Date" !== e.toString()
        );
      }

      function m(e) {
      const t = new Date(+e);
        if (null != e && f(t)) {
          return new Date(t.getFullYear(), t.getMonth(), t.getDate());
        }
    }

    function y(e, t) {
        b(!0, e),
          !e.alwaysShow && e.calendar.classList.add("qs-hidden"),
          !t && e.onHide && e.onHide(e);
    }

      function p(e, t) {
      e.calendar.classList.remove("qs-hidden"),
          (function(e) {
        if (e.noPosition) {
              return;
            }
            const { el: t, calendar: n, position: s, parent: i } = e,
              { top: a, right: o, centered: r } = s;
        if (r) {
              return n.classList.add("qs-centered");
            }
            const [l, c, d] = [i, t, n].map(e => e.getBoundingClientRect()),
              u = `\n    top:${c.top -
                l.top +
                i.scrollTop -
                (a ? d.height : -1 * c.height)}px;\n    left:${c.left -
                l.left +
                (o ? c.width - d.width : 0)}px;\n  `;
            n.setAttribute("style", u);
          })(e),
          !t && e.onShow && e.onShow(e);
    }

    function b(e, t) {
        const { calendar: n } = t,
          s = n.querySelector(".qs-overlay"),
          i = s.querySelector(".qs-overlay-year"),
          a = n.querySelector(".qs-controls"),
          o = n.querySelector(".qs-squares");
        e
          ? (s.classList.add("qs-hidden"),
            a.classList.remove("qs-blur"),
            o.classList.remove("qs-blur"),
            (i.value = ""))
          : (s.classList.remove("qs-hidden"),
            a.classList.add("qs-blur"),
            o.classList.add("qs-blur"),
            i.focus());
      }

    function v(e, t, n) {
        const s = isNaN(+new Date().setFullYear(t.value || void 0));
      if (13 === (e.which || e.keyCode) || "click" === e.type) {
        if (s || t.classList.contains("qs-disabled")) {
            return;
          }
          h(null, n, t.value);
      } else if (n.calendar.contains(t)) {
          n.calendar
            .querySelector(".qs-submit")
            .classList[s ? "add" : "remove"]("qs-disabled");
      }
    }

    function q(e) {
        const { type: t, target: n } = e,
          { classList: i } = n,
          a = s.filter(({ calendar: e, el: t }) => e.contains(n) || t === n)[0],
          o = a && a.calendar.contains(n);
      if (!(a && a.isMobile && a.disableMobile))
          if ("click" === t) {
          if (!a) {
              return s.forEach(y);
            }
            const { calendar: t, disableYearOverlay: r } = a,
              l = !!t.querySelector(".qs-hidden"),
              c = t.querySelector(".qs-month-year").contains(n);
          if (a.noPosition && !o) {
              (t.classList.contains("qs-hidden") ? p : y)(a);
          } else if (i.contains("qs-arrow")) {
              h(i, a);
          else if (c || i.contains("qs-close")) {!r && b(!l, a);}
            } else {
            if (i.contains("qs-num")) {
              const e = "SPAN" === n.nodeName ? n.parentNode : n,
                  t = ["qs-disabled", "qs-empty"].some(t =>
                    e.classList.contains(t)
                  );
                return e.classList.contains("qs-active")
                  ? d(e, a, !0)
                  : !t && d(e, a);
              }
              if (i.contains("qs-submit") && !i.contains("qs-disabled")) {
                v(e, t.querySelector(".qs-overlay-year"), a);
            }
          }
          } else if ("focusin" === t && a)
            p(a), s.forEach(e => e !== a && y(e));
        else if ("keydown" === t && a) {
            const t = !a.calendar
              .querySelector(".qs-overlay")
              .classList.contains("qs-hidden");
            13 === (e.which || e.keyCode) && t && o
              ? v(e, n, a)
              : 27 === (e.which || e.keyCode) && t && o && b(!0, a);
        } else if ("input" === t) {
          if (!a || !a.calendar.contains(n)) {
              return;
            }
          const e = n.parentElement.querySelector(".qs-submit"),
              t = n.value
                .split("")
                .reduce(
                  (e, t) =>
                    e || "0" !== t ? (t.match(/[0-9]/) ? e + t : e) : "",
                  ""
                )
                .slice(0, 4);
            (n.value = t),
              e.classList[4 === t.length ? "remove" : "add"]("qs-disabled");
        }
    }

    function g() {
        p(this, !0);
    }

    function D() {
        y(this, !0);
    }

    function w(e, t) {
      const n = m(e),
          { currentYear: s, currentMonth: i } = this;
        if (void 0 !== n && !n) {
          throw "`setDate` needs a JavaScript Date object.";
        }
        if (void 0 === n) {
          return (
            (this.dateSelected = void 0),
            this.sibling && (this.first ? this.setMin() : this.setMax()),
            u(this.el, this, !0),
            c(new Date(this.currentYear, this.currentMonth), this),
            this
          );
        }
        if (
          this.disabledDates.some(e => +e == +n) ||
          n < this.minDate ||
          n > this.maxDate
        ) {
          throw "You can't manually set a date that's disabled.";
        }
        if (
          ((this.currentYear = n.getFullYear()),
          (this.currentMonth = n.getMonth()),
          (this.currentMonthName = this.months[n.getMonth()]),
          (this.dateSelected = n),
          u(this.el, this),
          ((s === n.getFullYear() && i === n.getMonth()) || t) && c(n, this),
          this.sibling)
        ) {
          const e = this.first ? "setMin" : "setMax";
          this[e](n), this.sibling[e](n);
      }
        return this;
    }

    function S(e) {
        return x(this, e, !0);
    }

    function M(e) {
        return x(this, e);
    }

    function x(e, t, n, s) {
        if (void 0 != t && !f(t)) {
          throw `Invalid date passed to set${n ? "Min" : "Max"}`;
        }
        const { dateSelected: i } = e,
          a = m(t);
        if (n && a > e.maxDate) {
          throw "You can't set the minimum date past the maximum.";
        }
        if (!n && a < e.minDate) {
          throw "You can't set the maximum date below the minimum.";
        }
        return (
          i &&
            (e.sibling
              ? ((n && e.first) || (!n && !e.first)) && (e.dateSelected = a)
              : ((n && i < a) || (!n && i > a)) &&
                ((e.dateSelected = void 0), e.nonInput || (e.el.value = ""))),
          (e[n ? "minDate" : "maxDate"] = a),
          c(i || e.startDate, e),
          !s && e.sibling && x(e.sibling, a, n, !0),
          e
        );
      }

      function Y() {
        const {
        inlinePosition: e,
          parent: t,
        calendar: n,
          el: i,
        sibling: a
      } = this;
      if (e) {
          s.some(e => e !== this && e.parent === t) ||
            t.style.setProperty("position", null);
      }
        n.remove(), (s = s.filter(e => e.el !== i)), a && delete a.sibling;
        for (let e in this) {
          delete this[e];
        }
        s.length || r.forEach(e => document.removeEventListener(e, q));
    }
    e.exports = function(e, t) {
      s.length || r.forEach(e => document.addEventListener(e, q));
        const n = (function(e, t) {
          const n = "string" === typeof e ? document.querySelector(e) : e,
              r = (function(e, t) {
                if (s.some(e => e.el === t)) {
                  throw "A datepicker already exists on that element.";
                }
              const n = l(e);
                let {
                position: a,
                maxDate: r,
                minDate: c,
                dateSelected: d,
                customMonths: u,
                customDays: h,
                overlayPlaceholder: y,
                  overlayButton: p,
                startDay: b,
                disabledDates: v
              } = n;
                if (n.hasOwnProperty("id") && null == n.id) {
                  throw "Id cannot be `null` or `undefined`";
                }
              if (n.id) {
                  const e = s.reduce(
                    (e, t) => (t.id === n.id && e.push(t), e),
                    []
                  );
                  if (e.length > 1) {
                    throw "Only two datepickers can share an id.";
                  }
                  e.length && (n.sibling = e[0]);
              }
              n.disabledDates = (v || []).map(e => {
                  if (!f(e)) {
                    throw 'You supplied an invalid date to "options.disabledDates".';
                  }
                  if (+m(e) == +m(d)) {
                    throw '"disabledDates" cannot contain the same date as "dateSelected".';
                  }
                  return +m(e);
              });
              const q = ["tr", "tl", "br", "bl", "c"].some(e => a === e);
                if (a && !q) {
                  throw '"options.position" must be one of the following: tl, tr, bl, br, or c.';
                }
                if (
                  ((n.position = (function([e, t]) {
                const n = {};
                    return (n[o[e]] = 1), t && (n[o[t]] = 1), n;
                  })(a || "bl")),
                  ["startDate", "dateSelected", "minDate", "maxDate"].forEach(
                    e => {
                      if (n[e]) {
                        if (!f(n[e]) || isNaN(+n[e])) {
                          throw `"options.${e}" needs to be a valid JavaScript Date object.`;
                        }
                        n[e] = m(n[e]);
                }
                    }
                  ),
                  (n.startDate = m(
                    n.startDate || n.dateSelected || new Date()
                  )),
                  r < c)
                ) {
                  throw '"maxDate" in options is less than "minDate".';
                }
                if (d) {
                  if (c > d) {
                    throw '"dateSelected" in options is less than "minDate".';
                  }
                  if (r < d) {
                    throw '"dateSelected" in options is greater than "maxDate".';
                  }
                }
                if (
                  ([
                    "onSelect",
                    "onShow",
                    "onHide",
                    "onMonthChange",
                    "formatter",
                    "disabler"
                  ].forEach(e => {
                    n[e] = "function" === typeof n[e] && n[e];
                  }),
                  [u, h].forEach((e, t) => {
                if (e) {
                      if (
                        !Array.isArray(e) ||
                        e.length !== (t ? 7 : 12) ||
                        e.some(e => "string" !== typeof e)
                      ) {
                        throw [
                          '"customMonths" must be an array with 12 strings.',
                          '"customDays" must be an array with 7 strings.'
                        ][t];
                      }
                      n[t ? "days" : "months"] = e;
                }
                  }),
                  b && +b > 0 && +b < 7)
                ) {
                  let e = (n.customDays || i).slice();
                const t = e.splice(0, b);
                  (n.customDays = e.concat(t)),
                    (n.startDay = +b),
                    (n.weekendIndices = [e.length - 1, e.length]);
                } else {
                  (n.startDay = 0), (n.weekendIndices = [6, 0]);
                }
                return (
                  "string" !== typeof y && delete n.overlayPlaceholder,
                  "string" !== typeof p && delete n.overlayButton,
                  n
                );
              })(
                t || {
                  startDate: m(new Date()),
              position: "bl"
                },
                n
              ),
              { startDate: c, dateSelected: d } = r,
            h = n === document.body,
            y = h ? document.body : n.parentElement,
              b = document.createElement("div");
          b.className = "qs-datepicker qs-hidden";
            const v = {
            el: n,
            parent: y,
            nonInput: "INPUT" !== n.nodeName,
            noPosition: h,
            position: !h && r.position,
            startDate: c,
            dateSelected: d,
            disabledDates: r.disabledDates,
              minDate: r.minDate,
            maxDate: r.maxDate,
            noWeekends: !!r.noWeekends,
            weekendIndices: r.weekendIndices,
            calendar: b,
            currentMonth: (c || d).getMonth(),
            currentMonthName: (r.months || a)[(c || d).getMonth()],
              currentYear: (c || d).getFullYear(),
            setDate: w,
            remove: Y,
            setMin: S,
            setMax: M,
            show: g,
            hide: D,
            onSelect: r.onSelect,
            onShow: r.onShow,
            onHide: r.onHide,
            onMonthChange: r.onMonthChange,
            formatter: r.formatter,
            disabler: r.disabler,
            months: r.months || a,
              days: r.customDays || i,
            startDay: r.startDay,
            overlayPlaceholder: r.overlayPlaceholder || "4-digit year",
              overlayButton: r.overlayButton || "Submit",
            disableYearOverlay: !!r.disableYearOverlay,
              disableMobile: !!r.disableMobile,
            isMobile: "ontouchstart" in window,
              alwaysShow: !!r.alwaysShow,
            id: r.id
          };
            r.sibling &&
              ((v.sibling = r.sibling),
              (v.sibling.first = !0),
              (r.sibling.sibling = v)),
              d && u(n, v);
          const q = getComputedStyle(y).position;
            return (
              h ||
                (q && "static" !== q) ||
                ((v.inlinePosition = !0),
                y.style.setProperty("position", "relative")),
              v.inlinePosition &&
                s
                  .filter(e => e.parent === v.parent)
                  .forEach(e => (e.inlinePosition = !0)),
              s.push(v),
              y.appendChild(b),
              v.alwaysShow && p(v),
              v
            );
          })(e, t),
          { startDate: d, dateSelected: h } = n;
        return c(d || h, n), n;
      };
    },
  function(e, t, n) {}
  ]);
});
