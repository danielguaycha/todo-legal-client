import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
            customProperties: true,
        },
        dark: false,
        themes: { // config light as default theme
            light: {
                primary: '#00bcd4',
                secondary: '#2C4477',
                accent: '#45423E',
                error: '#FF1305',
                info: '#42EEFF',
                nodata: '#E8A341',
                success: '#41E84D',
                warning: '#FFF755',
                blue_grey: '#607d8b',
            },
        },
    },
    icons: {
        iconfont: 'mdi', // icons support
    },
});
