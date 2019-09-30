import { debounce } from "common/utils";
export const itemListenerMix = {
    mounted() {
        const refresh = debounce(this.$refs.scroll.refresh, 100);
        this.itemImgListener = () => {
            refresh();
        };

        this.$bus.$on("imgOnLoad", this.itemImgListener);
        console.log('mixin');
    },
} 