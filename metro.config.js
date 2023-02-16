const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
	const {
		resolver: {
			sourceExts,
			assetExts
		}
	} = await getDefaultConfig();

	return {
		transformer: {
			getTransformOptions: async () => ({
				transform: {
					experimentalImportSupport: false,
					inlineRequires: true,
					nonInlinedRequires: [
						"@react-native-async-storage/async-storage",
						'React',
						'react',
						'react-native',
					],
				},
			}),
			babelTransformerPath: require.resolve("react-native-svg-transformer")
		},
		resolver: {
			assetExts: assetExts.filter(ext => ext !== "svg"),
			sourceExts: [...sourceExts, "svg"]
		}
	};
})();