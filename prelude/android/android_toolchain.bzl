AndroidPlatformInfo = provider(fields = [
    "name",
])

AndroidToolchainInfo = provider(fields = [
    "aapt2",
    "adb",
    "aidl",
    "android_jar",
    "android_bootclasspath",
    "apk_builder",
    "apk_module_graph",
    "compress_libraries",
    "d8_command",
    "exopackage_agent_apk",
    "filter_dex_class_names",
    "filter_prebuilt_native_library_dir",
    "multi_dex_command",
    "copy_string_resources",
    "filter_resources",
    "framework_aidl_file",
    "generate_build_config",
    "generate_manifest",
    "instrumentation_test_runner_classpath",
    "instrumentation_test_runner_main_class",
    "manifest_utils",
    "merge_android_resources",
    "merge_assets",
    "mini_aapt",
    "native_libs_as_assets_metadata",
    "optimized_proguard_config",
    "package_strings_as_assets",
    "proguard_config",
    "proguard_jar",
    "proguard_max_heap_size",
    "secondary_dex_weight_limit",
    "unpack_aar",
    "zipalign",
])
