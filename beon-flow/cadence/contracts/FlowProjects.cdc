pub contract FlowProject {
    pub let publicPath: PublicPath
    pub let privatePath: StoragePath

    pub resource interface Public{
        pub fun getProjectName() : String
        

    }
}