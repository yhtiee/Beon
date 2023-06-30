pub contract NewAmbassadorProfile {

  pub let publicPath: PublicPath
  pub let privatePath: StoragePath

  pub resource interface Public {
    pub fun getFirstName(): String
    pub fun getLastName(): String
    pub fun getTwitterProfileLink(): String
    pub fun getInstagramProfileLink(): String
    pub fun getDiscordProfileLink(): String
    pub fun getLinkedinProfileLink(): String
    pub fun getBio() : String
    pub fun getWorkExperience() : String
    pub fun getTwitterUserName() : String
    pub fun getDiscordUserName(): String
    pub fun getLinkedinUserName(): String
    pub fun getInstagramUserName() : String
    pub fun asReadOnly(): NewAmbassadorProfile.ReadOnly
  }

  pub resource interface Owner {
    pub fun getFirstName(): String
    pub fun getLastName(): String
    pub fun getTwitterProfileLink(): String
    pub fun getInstagramProfileLink(): String
    pub fun getDiscordProfileLink(): String
    pub fun getLinkedinProfileLink(): String
    pub fun getBio() : String
    pub fun getWorkExperience() : String
    pub fun getTwitterUserName() : String
    pub fun getDiscordUserName(): String
    pub fun getLinkedinUserName(): String
    pub fun getInstagramUserName() : String
    pub fun setFirstName(_ firstName : String){
      pre {
        firstName.length <= 25: "Names must be under 25 characters long."
      }
    }

    pub fun setLastName(_ lastName : String){
      pre {
        lastName.length <= 25: "Names must be under 25 characters long."
      }
    }

    pub fun setTwitterProfileLink(_ twitterProfileLink : String)
    pub fun setInstagramProfileLink(_ instagramProfileLink : String)
    pub fun setLinkedinProfileLink(_ linkedinProfileLink : String)
    pub fun setDiscordProfileLink(_ discordProfileLink : String)
    

    pub fun setBio(_ bio: String){
      pre {
        bio.length <= 250: "bio must be under 250 characters long."
      }
    }

    pub fun setWorkExperience(_ workExperience: String){
      pre {
        workExperience.length <= 250: "bio must be under 250 characters long."
      }
    }

    pub fun setTwitterUserName(_ twitterUsername : String)
    pub fun setInstagramUserName(_ instagramUsername : String)
    pub fun setDiscordUserName(_ discordUserName : String)
    pub fun setLinkedinUserName(_ linkedinUserName : String)
  }

  pub resource Base: Owner, Public {
    access(self) var firstName: String
    access(self) var lastName: String
    access(self) var twitterProfileLink: String
    access(self) var instagramProfileLink: String
    access(self) var linkedinProfileLink: String
    access(self) var discordProfileLink: String
    access(self) var bio: String
    access(self) var workExperience: String
    access(self) var twitterUsername: String
    access(self) var instagramUsername: String
    access(self) var linkedinUserName: String
    access(self) var discordUserName: String


    init(){
      self.firstName = ""
      self.lastName = ""
      self.twitterProfileLink = ""
      self.instagramProfileLink = ""
      self.linkedinProfileLink = ""
      self.discordProfileLink = ""
      self.bio = ""
      self.workExperience = ""
      self.twitterUsername = ""
      self.instagramUsername = ""
      self.linkedinUserName = ""
      self.discordUserName = ""
    }

    pub fun getFirstName(): String { return self.firstName}
    pub fun getLastName(): String { return self.lastName}
    pub fun getInstagramProfileLink(): String { return self.instagramProfileLink}
    pub fun getTwitterProfileLink(): String { return self.twitterProfileLink}
    pub fun getDiscordProfileLink(): String { return self.discordProfileLink}
    pub fun getLinkedinProfileLink(): String { return self.linkedinProfileLink}
    pub fun getInstagramUserName(): String { return self.instagramUsername}
    pub fun getTwitterUserName(): String { return self.twitterUsername}
    pub fun getDiscordUserName(): String { return self.discordUserName}
    pub fun getLinkedinUserName(): String { return self.linkedinUserName}
    pub fun getBio(): String { return self.bio}
    pub fun getWorkExperience(): String { return self.workExperience}

    pub fun setFirstName(_ firstName: String) { self.firstName = firstName}
    pub fun setLastName(_ lastName: String) {
      self.lastName =lastName
    }
    pub fun setInstagramProfileLink(_ instagramProfileLink: String) {
      self.instagramProfileLink = instagramProfileLink
    }
    pub fun setTwitterProfileLink(_ twitterProfileLink:String) {
      self.twitterProfileLink = twitterProfileLink
    }
    pub fun setDiscordProfileLink(_ discordProfileLink:String) {
      self.discordProfileLink = discordProfileLink
    }
    pub fun setLinkedinProfileLink(_ linkedinProfileLink:String) {
      self.linkedinProfileLink = linkedinProfileLink
    }
    pub fun setTwitterUserName(_ twitterUsername: String) {
      self.twitterUsername = twitterUsername
    }
    pub fun setInstagramUserName(_ instagramUsername: String) {
      self.instagramUsername = instagramUsername
    }
    pub fun setLinkedinUserName(_ linkedinUserName: String) {
      self.linkedinUserName = linkedinUserName
    }
    pub fun setDiscordUserName(_ discordUserName: String) {
      self.discordUserName = discordUserName
    }
    pub fun setBio(_ bio: String) {
      self.bio = bio
    }
    pub fun setWorkExperience(_ workExperience:String) {
      self.workExperience =workExperience
    }

    pub fun asReadOnly(): NewAmbassadorProfile.ReadOnly {
      return NewAmbassadorProfile.ReadOnly(
        address : self.owner?.address,
        firstName: self.getFirstName(),
        lastName: self.getLastName(),
        bio : self.getBio(),
        workExperience : self.getWorkExperience(),
        twitterProfileLink: self.getTwitterProfileLink(),
        instagramProfileLink: self.getInstagramProfileLink(),
        discordProfileLink: self.getDiscordProfileLink(),
        linkedinProfileLink: self.getLinkedinProfileLink(),
        instagramUsername: self.getInstagramUserName(),
        linkedinUserName: self.getLinkedinUserName(),
        discordUserName: self.getDiscordUserName(),
        twitterUsername: self.getTwitterUserName()
      )
    }
  }

  pub struct ReadOnly {
    pub let address: Address?
    pub let firstName: String
    pub let lastName: String
    pub let twitterProfileLink : String
    pub let instagramProfileLink: String
    pub let discordProfileLink: String
    pub let linkedinProfileLink: String
    pub let twitterUsername: String
    pub let instagramUsername: String
    pub let linkedinUserName: String
    pub let discordUserName: String
    pub let bio: String
    pub let workExperience: String

    init(address:Address?, firstName:String, lastName:String, twitterProfileLink:String, instagramUsername:String, instagramProfileLink:String, twitterUsername:String, bio:String, workExperience:String, linkedinUserName: String, discordUserName: String, linkedinProfileLink: String, discordProfileLink: String){
      self.address = address
      self.firstName = firstName
      self.lastName = lastName
      self.bio = bio
      self.workExperience = workExperience
      self.instagramProfileLink = instagramProfileLink
      self.discordProfileLink = discordProfileLink
      self.linkedinProfileLink = linkedinProfileLink
      self.instagramUsername = instagramUsername
      self.twitterProfileLink = twitterProfileLink
      self.twitterUsername = twitterUsername
      self.discordUserName = discordUserName
      self.linkedinUserName = linkedinUserName
    }
  }

  pub fun new(): @NewAmbassadorProfile.Base {
    return <- create Base()
  }

  pub fun check(_ address: Address): Bool {
    return getAccount(address)
      .getCapability<&{NewAmbassadorProfile.Public}>(NewAmbassadorProfile.publicPath)
      .check()
  }

  pub fun fetch(_ address: Address): &{NewAmbassadorProfile.Public} {
    return getAccount(address)
      .getCapability<&{NewAmbassadorProfile.Public}>(NewAmbassadorProfile.publicPath)
      .borrow()!
  }

  pub fun read(_ address: Address): NewAmbassadorProfile.ReadOnly? {
    if let profile: &AnyResource{NewAmbassadorProfile.Public} = getAccount(address).getCapability<&{NewAmbassadorProfile.Public}>(NewAmbassadorProfile.publicPath).borrow() {
      return profile.asReadOnly()
    } else {
      return nil
    }
  }

  init() {
    self.publicPath = /public/newprofile
    self.privatePath = /storage/newprofile

    self.account.save(<- self.new(), to: self.privatePath)
    self.account.link<&Base{Public}>(self.publicPath, target: self.privatePath)

    self.account
      .borrow<&Base{Owner}>(from: self.privatePath)!
      .setFirstName("qvvg")
  }

}