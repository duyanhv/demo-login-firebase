interface AppSettingsState {
    language: string;
    isTranslating: boolean;
    apiUrl: string;
    clientUrl: string;
    maxPageSize: number;
    gridPage: {
        defaultPageSize: number;
        pageSizes: number[];
    };
}

export default AppSettingsState;
