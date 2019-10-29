export interface EsiProcessorOptions {
    Headers?: object;
    BaseUrl?: string;
    IgnoreEsiChooseTags?: boolean;
    XmlMode?: boolean;
    Verbose?: boolean;
}

export interface HttpRequestOptions {
    url: string;
    headers?: object;
}
