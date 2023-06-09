pub contract Ambassadors {
  
  // Role-based access control
  pub resource AmbassadorRole {
    pub let ambassador: Capability<&{AmbassadorDetails}>
    init() {
      self.ambassador = create Capability<&{AmbassadorDetails}>(AuthAccount.accessPathFor(self))
    }
  }
  
  pub struct AmbassadorDetails {
    pub(set) var firstName: String
    pub(set) var lastName: String
    pub(set) var twitterProfile: String
    pub(set) var instagramProfile: String
    pub(set) var bio: String
    pub(set) var workExperience: String
    pub(set) var twitterUsername: String
    pub(set) var instagramUsername: String
  }

  pub var ambassadors: {Address: AmbassadorDetails}
  pub var roles: {Address: AmbassadorRole}

  init() {
    self.ambassadors = {}
    self.roles = {}
  }
  
  pub fun createAmbassador(
    sender: AuthAccount,
    firstName: String,
    lastName: String,
    twitterProfile: String,
    instagramProfile: String,
    bio: String,
    workExperience: String,
    twitterUsername: String,
    instagramUsername: String
  ) {
    let ambassadorRole = self.roles[sender.address]
    if ambassadorRole == nil {
      return
    }
    
    let newAmbassador = AmbassadorDetails(
      firstName: firstName,
      lastName: lastName,
      twitterProfile: twitterProfile,
      instagramProfile: instagramProfile,
      bio: bio,
      workExperience: workExperience,
      twitterUsername: twitterUsername,
      instagramUsername: instagramUsername
    )
    self.ambassadors[sender.address] = newAmbassador
  }
  
  pub fun getAmbassador(user: Address): AmbassadorDetails? {
    return self.ambassadors[user]
  }

  pub fun getAllAmbassadors(): {Address: AmbassadorDetails} {
    return self.ambassadors
  }
  
  pub fun updateAmbassador(
    sender: AuthAccount,
    firstName: String,
    lastName: String,
    twitterProfile: String,
    instagramProfile: String,
    bio: String,
    workExperience: String,
    twitterUsername: String,
    instagramUsername: String
  ) {
    let ambassadorRole = self.roles[sender.address]
    if ambassadorRole == nil {
      return
    }
    
    let ambassador = self.ambassadors[sender.address]
    if var existingAmbassador = ambassador {
      existingAmbassador.firstName = firstName
      existingAmbassador.lastName = lastName
      existingAmbassador.twitterProfile = twitterProfile
      existingAmbassador.instagramProfile = instagramProfile
      existingAmbassador.bio = bio
      existingAmbassador.workExperience = workExperience
      existingAmbassador.twitterUsername = twitterUsername
      existingAmbassador.instagramUsername = instagramUsername
      self.ambassadors[sender.address] = existingAmbassador
    }
  }
  
  pub fun grantAmbassadorRole(recipient: Address) {
    self.roles[recipient] = AmbassadorRole()
  }
}
