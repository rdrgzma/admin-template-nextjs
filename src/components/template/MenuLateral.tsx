import { IconeCasa, IconeAjustes, IconeSino, IconeSair } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
  return (
    <aside className="flex flex-col text-gray-700 bg-gray-200 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-800">
        <Logo />
      </div>
      <ul className="flex-grow ">
        <MenuItem url="/" texto="Início" icone={IconeCasa} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
        <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino} />
      </ul>
      <ul className="">
        <MenuItem
          onClick={() => console.log("Logout")}
          texto="Sair"
          icone={IconeSair}
          className={`text-red-600 hover:bg-red-400 hover:text-white dark:text-red-400 dark:hover:text-white`}
        />
      </ul>
    </aside>
  );
}
