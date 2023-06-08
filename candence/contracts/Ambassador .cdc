pub contract Ambassadors {

  pub struct AmbassadorDetails {
  
        pub(set) var firstName: String
        pub(set) var lastName: String
        pub(set) var twitterProfile: String
        pub(set) var instagramProfile: String
        pub(set) var bio: String
        pub(set) var workExperience: String
        pub(set) var twitterUsername: String
        pub(set) var instagramUsername: String
        
        init( 
        firstName: String, 
        lastName: String, 
        twitterProfile: String, 
        instagramProfile: String, 
        bio: String,
        workExperience: String,
        twitterUsername: String,
        instagramUsername: String) {
          self.firstName = firstName
          self.lastName = lastName
          self.twitterProfile = twitterProfile
          self.instagramProfile = instagramProfile
          self.bio = bio
          self.workExperience = workExperience
          self.twitterUsername = twitterUsername
          self.instagramUsername = instagramUsername
        }
  }

  pub var ambassadors: {Address: AmbassadorDetails}

  init() {
    self.ambassadors = {}
  }

  pub fun createAmbassador(
    sender: Address,
    firstName: String,
    lastName: String,
    twitterProfile: String,
    instagramProfile: String,
    bio: String,
    workExperience: String,
    twitterUsername: String,
    instagramUsername: String
  ) {
      let newAmbassador = AmbassadorDetails(
        firstName: firstName,
        lastName: lastName,
        twitterProfile: twitterProfile,
        instagramProfile: instagramProfile,
        bio: bio,
        workExperience: workExperience,
        twitterUsername: twitterUsername,
        instagramUsername: instagramUsername
      );
      self.ambassadors[sender] = newAmbassador;
    }
    
  pub fun getAmbassador(user: Address): AmbassadorDetails? {
    return self.ambassadors[user];
  }

  pub fun getAllAmbassadors(): {Address: AmbassadorDetails} {
    return self.ambassadors;
  }

   pub fun updateAmbassador(
        sender: Address,
        firstName: String,
        lastName: String,
        twitterProfile: String,
        instagramProfile: String,
        bio: String,
        workExperience: String,
        twitterUsername: String,
        instagramUsername: String
    ) {
        let ambassador = self.ambassadors[sender];
        if var existingAmbassador = ambassador {
            existingAmbassador.firstName = firstName;
            existingAmbassador.lastName = lastName;
            existingAmbassador.twitterProfile = twitterProfile;
            existingAmbassador.instagramProfile = instagramProfile;
            existingAmbassador.bio = bio;
            existingAmbassador.workExperience = workExperience;
            existingAmbassador.twitterUsername = twitterUsername;
            existingAmbassador.instagramUsername = instagramUsername;
            self.ambassadors[sender] = existingAmbassador;
        }
    }
}