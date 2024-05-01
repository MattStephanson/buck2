"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[807],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>u,MDXProvider:()=>f,mdx:()=>b,useMDXComponents:()=>d,withMDXComponents:()=>c});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a.apply(this,arguments)}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=o.createContext({}),c=function(e){return function(n){var t=d(n.components);return o.createElement(e,a({},n,{components:t}))}},d=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},f=function(e){var n=d(e.components);return o.createElement(u.Provider,{value:n},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(t),f=i,h=c["".concat(r,".").concat(f)]||c[f]||p[f]||a;return t?o.createElement(h,s(s({ref:n},u),{},{components:t})):o.createElement(h,s({ref:n},u))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[h]="string"==typeof e?e:i,r[1]=s;for(var u=2;u<a;u++)r[u]=t[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8816:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=t(87462),i=(t(67294),t(3905));const a={id:"build",title:"build"},r=void 0,s={unversionedId:"users/commands/build",id:"users/commands/build",title:"build",description:"These are the flags/commands under buck2 build and their --help output:",source:"@site/../docs/users/commands/build.generated.md",sourceDirName:"users/commands",slug:"/users/commands/build",permalink:"/docs/users/commands/build",draft:!1,tags:[],version:"current",frontMatter:{id:"build",title:"build"},sidebar:"manualSidebar",previous:{title:"audit",permalink:"/docs/users/commands/audit"},next:{title:"bxl",permalink:"/docs/users/commands/bxl"}},l={},u=[{value:"buck build",id:"buck-build",level:2}],c={toc:u};function d(e){let{components:n,...t}=e;return(0,i.mdx)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"These are the flags/commands under ",(0,i.mdx)("inlineCode",{parentName:"p"},"buck2 build")," and their ",(0,i.mdx)("inlineCode",{parentName:"p"},"--help")," output:"),(0,i.mdx)("h2",{id:"buck-build"},"buck build"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text"},"Build the specified targets\n\nUsage: buck2-release build [OPTIONS] [TARGET_PATTERNS]...\n\nArguments:\n  [TARGET_PATTERNS]...\n          Patterns to build\n\nOptions:\n      --show-output\n          Print the path to the output for each of the rules relative to the project root\n\n      --show-full-output\n          Print the absolute path to the output for each of the rules\n\n      --show-simple-output\n          Print only the path to the output for each of the rules relative to the project root\n\n      --show-full-simple-output\n          Print only the absolute path to the output for each of the rules\n\n      --show-json-output\n          Print the output paths relative to the project root, in JSON format\n\n      --show-full-json-output\n          Print the output absolute paths, in JSON format\n\n  -M, --materializations <MATERIALIZATIONS>\n          Materialize (or skip) the final artifacts, bypassing buckconfig.\n          \n          [possible values: all, none]\n\n      --build-default-info\n          Build default info (this is the default)\n\n      --skip-default-info\n          Do not build default info (this is not the default)\n\n      --build-run-info\n          Build runtime dependencies (this is the default)\n\n      --skip-run-info\n          Do not build runtime dependencies (this is not the default)\n\n      --build-test-info\n          Build tests (this is not the default)\n\n      --skip-test-info\n          Do not build tests (this is the default)\n\n      --out <OUTPUT_PATH>\n          Copy the output of the built target to this path (`-` to stdout)\n\n      --output-hashes-file <OUTPUT_HASHES_FILE>\n          Experimental: Path to a file where the Buck2 daemon should write a list of produced\n          artifacts in json format\n\n      --build-report <PATH>\n          Print a build report\n          \n          `--build-report=-` will print the build report to stdout `--build-report=<filepath>` will\n          write the build report to the file\n\n      --build-report-options <BUILD_REPORT_OPTIONS>\n          Comma separated list of build report options.\n          \n          The following options are supported:\n          \n          `fill-out-failures`: fill out failures the same way Buck1 would.\n          \n          `package-project-relative-paths`: emit the project-relative path of packages for the\n          targets that were built.\n\n  -j, --num-threads <THREADS>\n          Number of threads to use during execution (default is # cores)\n\n      --local-only\n          Enable only local execution. Will reject actions that cannot execute locally\n          \n          [env: BUCK_OFFLINE_BUILD=]\n\n      --remote-only\n          Enable only remote execution. Will reject actions that cannot execute remotely\n\n      --prefer-local\n          Enable hybrid execution. Will prefer executing actions that can execute locally on the\n          local host\n\n      --prefer-remote\n          Enable hybrid execution. Will prefer executing actions that can execute remotely on RE and\n          will avoid racing local and remote execution\n\n      --unstable-no-execution\n          Experimental: Disable all execution\n\n      --no-remote-cache\n          Do not perform remote cache queries or cache writes. If remote execution is enabled, the\n          RE service might still deduplicate actions, so for e.g. benchmarking, using a random\n          isolation dir is preferred\n          \n          [env: BUCK_OFFLINE_BUILD=]\n\n      --write-to-cache-anyway\n          Could be used to enable the action cache writes on the RE worker when no_remote_cache is\n          specified\n\n      --eager-dep-files\n          Process dep files when they are generated (i.e. after running a command that produces dep\n          files), rather than when they are used (i.e. before re-running a command that previously\n          produced dep files). Use this when debugging commands that produce dep files. Note that\n          commands that previously produced dep files will not re-run: only dep files produced\n          during this command will be eagerly loaded\n\n      --upload-all-actions\n          Uploads every action to the RE service, regardless of whether the action needs to execute\n          on RE.\n          \n          This is useful when debugging builds and trying to inspect actions which executed\n          remotely. It's possible that the action result is cached but the action itself has\n          expired. In this case, downloading the action itself would fail. Enabling this option\n          would unconditionally upload all actions, thus you will not hit any expiration issues.\n\n      --fail-fast\n          If Buck hits an error, do as little work as possible before exiting.\n          \n          To illustrate the effect of this flag, consider an invocation of `build :foo :bar`. The\n          default behavior of buck is to do enough work to get a result for the builds of each of\n          `:foo` and `:bar`, and no more. This means that buck will continue to complete the build\n          of `:bar` after the build of `:foo` has failed; however, once one dependency of `:foo` has\n          failed, other dependencies will be cancelled unless they are needed by `:bar`.\n          \n          This flag changes the behavior of buck to not wait on `:bar` to complete once `:foo` has\n          failed. Generally, this flag only has an effect on builds that specify multiple targets.\n          \n          `--keep-going` changes the behavior of buck to not only wait on `:bar` once one dependency\n          of `:foo` has failed, but to additionally attempt to build other dependencies of `:foo` if\n          possible.\n\n      --keep-going\n          If Buck hits an error, continue doing as much work as possible before exiting.\n          \n          See `--fail-fast` for more details.\n\n      --skip-missing-targets\n          If target is missing, then skip building instead of throwing error\n\n      --skip-incompatible-targets\n          If target is incompatible with the specified configuration, skip building instead of\n          throwing error. This does not apply to targets specified with glob patterns `/...` or `:`\n          which are skipped unconditionally\n\n      --materialize-failed-inputs\n          Materializes inputs for failed actions which ran on RE\n\n  -h, --help\n          Print help (see a summary with '-h')\n\nTarget Configuration Options:\n  -u, --target-universe <TARGET_UNIVERSE>\n          Comma separated list of targets to construct a configured target universe.\n          When the option is specified, command targets are be resolved in this universe.\n          Additionally, `--target-platforms=` and `--modifier=` flags\n          are be used to configure the universe targets, not the command targets.\n\n      --target-platforms <PLATFORM>\n          Configuration target (one) to use to configure targets\n\nBuckconfig Options:\n  -c, --config <SECTION.OPTION=VALUE>\n          List of config options\n\n      --config-file <PATH>\n          List of config file paths\n\n      --fake-host <HOST>\n          [possible values: default, linux, macos, windows]\n\n      --fake-arch <ARCH>\n          [possible values: default, aarch64, x8664]\n\n      --fake-xcode-version <VERSION-BUILD>\n          Value must be formatted as: version-build (e.g., 14.3.0-14C18 or 14.1-14B47b)\n\n      --reuse-current-config\n          Re-uses any `--config` values (inline or via modefiles) if there's a previous command,\n          otherwise the flag is ignored.\n          \n          If there is a previous command and `--reuse-current-config` is set, then the old config is\n          used, ignoring any overrides.\n          \n          If there is no previous command but the flag was set, then the flag is ignored, the\n          command behaves as if the flag was not set at all.\n\n      --exit-when-different-state\n          Used for exiting a concurrent command when a different state is detected\n\nStarlark Options:\n      --disable-starlark-types\n          Disable runtime type checking in Starlark interpreter.\n          \n          This option is not stable, and can be used only locally to diagnose evaluation performance\n          problems.\n\n      --stack\n          Record or show target call stacks.\n          \n          Starlark call stacks will be included in duplicate targets error.\n          \n          If a command outputs targets (like `targets` command), starlark call stacks will be\n          printed after the targets.\n\nConsole Options:\n      --console <super|simple|...>\n          Which console to use for this command\n          \n          [env: BUCK_CONSOLE=]\n          [default: auto]\n          [possible values: simple, simplenotty, simpletty, super, auto, none]\n\n      --ui <UI>...\n          Configure additional superconsole ui components.\n          \n          Accepts a comma-separated list of superconsole components to add. Possible values are:\n          \n          dice - shows information about evaluated dice nodes debugevents - shows information about\n          the flow of events from buckd\n          \n          These components can be turned on/off interactively. Press 'h' for help when superconsole\n          is active.\n\n          Possible values:\n          - dice\n          - debugevents\n          - io:          I/O panel\n          - re:          RE panel\n\n      --no-interactive-console\n          Disable console interactions\n          \n          [env: BUCK_NO_INTERACTIVE_CONSOLE=]\n\nEvent Log Options:\n      --event-log <PATH>\n          Write events to this log file\n\n      --write-build-id <PATH>\n          Write command invocation id into this file\n\n      --unstable-write-invocation-record <PATH>\n          Write the invocation record (as JSON) to this path. No guarantees whatsoever are made\n          regarding the stability of the format\n\nUniversal Options:\n  -v, --verbose <VERBOSITY>\n          How verbose buck should be while logging.\n          \n          Values: 0 = Quiet, errors only; 1 = Show status. Default; 2 = more info about errors; 3 =\n          more info about everything; 4 = more info about everything + stderr;\n          \n          It can be combined with specific log items (stderr, full_failed_command, commands,\n          actions, status, stats, success) to fine-tune the verbosity of the log. Example usage\n          \"-v=1,stderr\"\n          \n          [default: 1]\n\n      --oncall <ONCALL>\n          The oncall executing this command\n\n      --client-metadata <CLIENT_METADATA>\n          Metadata key-value pairs to inject into Buck2's logging. Client metadata must be of the\n          form `key=value`, where `key` is a snake_case identifier, and will be sent to backend\n          datasets\n\n")))}d.isMDXComponent=!0}}]);