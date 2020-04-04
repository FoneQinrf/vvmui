import Backtop from "./components/Backtop";
import Button from "./components/Button";
import Calendar from "./components/Calendar";
import Cell from "./components/Cell";
import CellGroup from "./components/CellGroup";
import Checkbox from "./components/Checkbox";
import CheckboxGroup from "./components/CheckboxGroup";
import From from "./components/From";
import FromItem from "./components/FromItem";
import Icon from "./components/Icon";
import Input from "./components/Input";
import Layer from "./components/Layer";
import NumberInput from "./components/NumberInput";
import Picker from "./components/Picker";
import Radio from "./components/Radio";
import RadioGroup from "./components/RadioGroup";
import Switch from "./components/Switch";
import Upload from "./components/Upload";
import Loading from "./components/~Loading";
import Toast from "./components/~Toast";
 

const components = [Backtop,Button,Calendar,Cell,CellGroup,Checkbox,CheckboxGroup,From,FromItem,Icon,Input,Layer,NumberInput,Picker,Radio,RadioGroup,Switch,Upload]

const install = function (Vue) {
      if (install.installed) return;
      components.map(component => Vue.component(component.name, component))
      Vue.prototype.$Loading = Loading;
Vue.prototype.$Toast = Toast;

};
      
// auto install
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(components)
}
      
export default install
    