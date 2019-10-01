import { debounce } from "common/utils";
import BackTop from "components/content/backTop/BackTop";

export const itemListenerMix = {
    mounted() {
        const refresh = debounce(this.$refs.scroll.refresh, 100);
        this.itemImgListener = () => {
            refresh();
        };

        this.$bus.$on("imgOnLoad", this.itemImgListener);
    },
} 

export const backTopMix = {
    components:{
        BackTop
    },
    data () {
        return {
            isShow: false,
        }
    },
    methods: {      
        backClick() {
            this.$refs.scroll.scrollTo(0, 0);
        },
    }
}