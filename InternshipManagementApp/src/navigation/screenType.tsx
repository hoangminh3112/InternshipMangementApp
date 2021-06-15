import { StudentsList } from "../model/studentsList";


export enum APP_SCREEN {
    SIGN_IN = "SignIn",
    REGISTER = "Register",
    STACK_NAVIGATION = "STACK_NAVIGATION",
    PROJECTS = "Projects",
    STATISTICS = "Statistics",
    TABS = "Tabs",
    CALENDER = "Calender",
    CHAT = "Chat",
    PROJECT_DETAIL = "Project_Detail",
    DR_TODO_LIST = 'ToDoList',
    DR_ADD_TOTO = 'DR_ADD_TOTO',
    CHAT_SCREEN = 'Chat_Screen',
    ROOM_SCREEN = 'Room_Screen'
}

export type RootStackParamList = {
    [APP_SCREEN.SIGN_IN]: undefined;
    [APP_SCREEN.REGISTER]: undefined;
    [APP_SCREEN.STACK_NAVIGATION]: undefined;
    [APP_SCREEN.PROJECTS]: { studensList: StudentsList };
    [APP_SCREEN.STATISTICS]: undefined;
    [APP_SCREEN.TABS]: undefined;
    [APP_SCREEN.CALENDER]: undefined;
    [APP_SCREEN.CHAT]: undefined;
    [APP_SCREEN.PROJECT_DETAIL]: { studentsList: StudentsList };
    [APP_SCREEN.DR_TODO_LIST]: undefined;
    [APP_SCREEN.DR_ADD_TOTO]: undefined;
    [APP_SCREEN.CHAT_SCREEN]: undefined;
    [APP_SCREEN.ROOM_SCREEN]: undefined;
}