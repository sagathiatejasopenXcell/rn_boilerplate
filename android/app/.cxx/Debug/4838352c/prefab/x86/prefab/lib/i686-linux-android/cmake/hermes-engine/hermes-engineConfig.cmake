if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/Users/tejas/.gradle/caches/8.10.2/transforms/5b7dd034d30c78c1ad231140d95b0923/transformed/jetified-hermes-android-0.76.1-debug/prefab/modules/libhermes/libs/android.x86/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/tejas/.gradle/caches/8.10.2/transforms/5b7dd034d30c78c1ad231140d95b0923/transformed/jetified-hermes-android-0.76.1-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

