pub contract AmbassadorProfile {

  pub let publicPath: PublicPath
  pub let privatePath: StoragePath

  pub resource interface Public {
    pub fun getFirstName(): String
    pub fun getLastName(): String
    pub fun getTwitterProfileLink(): String
    pub fun getInstagramProfileLink(): String
    pub fun getBio() : String
    pub fun getWorkExperience() : String
    pub fun getTwitterUserName() : String
    pub fun getInstagramUserName() : String
    pub fun asReadOnly(): AmbassadorProfile.ReadOnly
  }

  pub resource interface Owner {
    pub fun getFirstName(): String
    pub fun getLastName(): String
    pub fun getTwitterProfileLink(): String
    pub fun getInstagramProfileLink(): String
    pub fun getBio() : String
    pub fun getWorkExperience() : String
    pub fun getTwitterUserName() : String
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
  }

  pub resource Base: Owner, Public {
    access(self) var firstName: String
    access(self) var lastName: String
    access(self) var twitterProfileLink: String
    access(self) var instagramProfileLink: String
    access(self) var bio: String
    access(self) var workExperience: String
    access(self) var twitterUsername: String
    access(self) var instagramUsername: String

    init(){
      self.firstName = ""
      self.lastName = ""
      self.twitterProfileLink = ""
      self.instagramProfileLink = ""
      self.bio = ""
      self.workExperience = ""
      self.twitterUsername = ""
      self.instagramUsername = ""
    }

    pub fun getFirstName(): String { return self.firstName}
    pub fun getLastName(): String { return self.lastName}
    pub fun getInstagramProfileLink(): String { return self.instagramProfileLink}
    pub fun getTwitterProfileLink(): String { return self.twitterProfileLink}
    pub fun getInstagramUserName(): String { return self.instagramUsername}
    pub fun getTwitterUserName(): String { return self.twitterUsername}
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
    pub fun setTwitterUserName(_ twitterUsername: String) {
      self.twitterUsername = twitterUsername
    }
    pub fun setInstagramUserName(_ instagramUsername: String) {
      self.instagramUsername = instagramUsername
    }
    pub fun setBio(_ bio: String) {
      self.bio = bio
    }
    pub fun setWorkExperience(_ workExperience:String) {
      self.workExperience =workExperience
    }

    pub fun asReadOnly(): AmbassadorProfile.ReadOnly {
      return AmbassadorProfile.ReadOnly(
        address : self.owner?.address,
        firstName: self.getFirstName(),
        lastName: self.getLastName(),
        bio : self.getBio(),
        workExperience : self.getWorkExperience(),
        twitterProfileLink: self.getTwitterProfileLink(),
        instagramProfileLink: self.getInstagramProfileLink(),
        instagramUsername: self.getInstagramUserName(),
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
    pub let twitterUsername: String
    pub let instagramUsername: String
    pub let bio: String
    pub let workExperience: String

    init(address:Address?, firstName:String, lastName:String, twitterProfileLink:String, instagramUsername:String, instagramProfileLink:String, twitterUsername:String, bio:String, workExperience:String){
      self.address = address
      self.firstName = firstName
      self.lastName = lastName
      self.bio = bio
      self.workExperience = workExperience
      self.instagramProfileLink = instagramProfileLink
      self.instagramUsername = instagramUsername
      self.twitterProfileLink = twitterProfileLink
      self.twitterUsername = twitterUsername
    }
  }

  pub fun new(): @AmbassadorProfile.Base {
    return <- create Base()
  }

  pub fun check(_ address: Address): Bool {
    return getAccount(address)
      .getCapability<&{AmbassadorProfile.Public}>(AmbassadorProfile.publicPath)
      .check()
  }

  pub fun fetch(_ address: Address): &{AmbassadorProfile.Public} {
    return getAccount(address)
      .getCapability<&{AmbassadorProfile.Public}>(AmbassadorProfile.publicPath)
      .borrow()!
  }

  pub fun read(_ address: Address): AmbassadorProfile.ReadOnly? {
    if let profile: &AnyResource{AmbassadorProfile.Public} = getAccount(address).getCapability<&{AmbassadorProfile.Public}>(AmbassadorProfile.publicPath).borrow() {
      return profile.asReadOnly()
    } else {
      return nil
    }
  }

  init() {
    self.publicPath = /public/profile
    self.privatePath = /storage/profile

    self.account.save(<- self.new(), to: self.privatePath)
    self.account.link<&Base{Public}>(self.publicPath, target: self.privatePath)

    self.account
      .borrow<&Base{Owner}>(from: self.privatePath)!
      .setFirstName("qvvg")
  }

}