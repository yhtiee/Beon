import Test

pub let blockchain = Test.newEmulatorBlockchain()
pub let admin = blockchain.createAccount()
pub let ambassador = blockchain.createAccount()
pub let nonAmbassador = blockchain.createAccount()

pub fun setup() {
  blockchain.createBlock([admin, ambassador, nonAmbassador])
}

pub fun testCreateAmbassador() {
  let contract = blockchain.createContract(
    """
    import AmbassadorContract from "./AmbassadorContract"

    pub contract AmbassadorsTest {
    
      pub fun testCreateAmbassador() {
        let ambassador = blockchain.createAccount()
        let contract = AmbassadorContract.deploy(
          address: ambassador.address,
          firstName: "John",
          lastName: "Doe",
          twitterProfile: "https://twitter.com/johndoe",
          instagramProfile: "https://www.instagram.com/johndoe/",
          bio: "I'm an ambassador",
          workExperience: "5 years in marketing",
          twitterUsername: "johndoe",
          instagramUsername: "johndoe"
        )

        let result = contract.createAmbassador(
          address: ambassador.address,
          firstName: "John",
          lastName: "Doe",
          twitterProfile: "https://twitter.com/johndoe",
          instagramProfile: "https://www.instagram.com/johndoe/",
          bio: "I'm an ambassador",
          workExperience: "5 years in marketing",
          twitterUsername: "johndoe",
          instagramUsername: "johndoe"
        )
        
        Test.assert(result)
        
        let createdAmbassador = contract.getAmbassador(address: ambassador.address)
        Test.assertIsNotNil(createdAmbassador)
      }
    }
    """
  )

  let result = contract.testCreateAmbassador()
  Test.assertTrue(result)
}

pub fun testUpdateAmbassador() {
  let contract = blockchain.createContract(
    """
    import AmbassadorContract from "./AmbassadorContract"

    pub contract AmbassadorsTest {
    
      pub fun testUpdateAmbassador() {
        let ambassador = blockchain.createAccount()
        let contract = AmbassadorContract.deploy(
          address: ambassador.address,
          firstName: "John",
          lastName: "Doe",
          twitterProfile: "https://twitter.com/johndoe",
          instagramProfile: "https://www.instagram.com/johndoe/",
          bio: "I'm an ambassador",
          workExperience: "5 years in marketing",
          twitterUsername: "johndoe",
          instagramUsername: "johndoe"
        )

        let result = contract.updateAmbassador(
          address: ambassador.address,
          firstName: "Updated",
          lastName: "Doe",
          twitterProfile: "https://twitter.com/updateddoe",
          instagramProfile: "https://www.instagram.com/updateddoe/",
          bio: "I'm an updated ambassador",
          workExperience: "10 years in marketing",
          twitterUsername: "updateddoe",
          instagramUsername: "updateddoe"
        )
        
        Test.assert(result)
        
        let updatedAmbassador = contract.getAmbassador(address: ambassador.address)
        Test.assertIsNotNil(updatedAmbassador)
        Test.assertEqual(updatedAmbassador!.firstName, "Updated")
      }
    }
    """
  )

  let result = contract.testUpdateAmbassador()
  Test.assertTrue(result)
}

pub fun testNonAmbassadorCannotCreateAmbassador() {
  let contract = blockchain.createContract(
    """
    import AmbassadorContract from "./AmbassadorContract"

    pub contract AmbassadorsTest {
    
      pub fun testNonAmbassadorCannotCreateAmbassador() {
        let contract = AmbassadorContract.deploy(
          address: admin.address,
          firstName: "John",
          lastName: "Doe",
          twitterProfile: "https://twitter.com/johndoe",
          instagramProfile: "https://www.instagram.com/johndoe/",
          bio: "I'm an ambassador",
          workExperience: "5 years in marketing",
          twitterUsername: "johndoe",
          instagramUsername: "johndoe"
        )

        let result = contract.createAmbassador(
          address: nonAmbassador.address,
          firstName: "John",
          lastName: "Doe",
          twitterProfile: "https://twitter.com/johndoe",
          instagramProfile: "https://www.instagram.com/johndoe/",
          bio: "I'm an ambassador",
          workExperience: "5 years in marketing",
          twitterUsername: "johndoe",
          instagramUsername: "johndoe"
        )
        
        Test.assertFalse(result)
        
        let ambassador = contract.getAmbassador(address: nonAmbassador.address)
        Test.assertIsNil(ambassador)
      }
    }
    """
  )

  let result = contract.testNonAmbassadorCannotCreateAmbassador()
  Test.assertTrue(result)
}

pub fun testNonAmbassadorCannotUpdateAmbassador() {
  let contract = blockchain.createContract(
    """
    import AmbassadorContract from "./AmbassadorContract"

    pub contract AmbassadorsTest {
    
      pub fun testNonAmbassadorCannotUpdateAmbassador() {
        let ambassador = blockchain.createAccount()
        let contract = AmbassadorContract.deploy(
          address: ambassador.address,
          firstName: "John",
          lastName: "Doe",
          twitterProfile: "https://twitter.com/johndoe",
          instagramProfile: "https://www.instagram.com/johndoe/",
          bio: "I'm an ambassador",
          workExperience: "5 years in marketing",
          twitterUsername: "johndoe",
          instagramUsername: "johndoe"
        )

        let result = contract.updateAmbassador(
          address: nonAmbassador.address,
          firstName: "Updated",
          lastName: "Doe",
          twitterProfile: "https://twitter.com/updateddoe",
          instagramProfile: "https://www.instagram.com/updateddoe/",
          bio: "I'm an updated ambassador",
          workExperience: "10 years in marketing",
          twitterUsername: "updateddoe",
          instagramUsername: "updateddoe"
        )
        
        Test.assertFalse(result)
        
        let ambassador = contract.getAmbassador(address: ambassador.address)
        Test.assertIsNotNil(ambassador)
        Test.assertNotEqual(ambassador!.firstName, "Updated")
      }
    }
    """
  )

  let result = contract.testNonAmbassadorCannotUpdateAmbassador()
  Test.assertTrue(result)
}

pub fun runTests() {
  testCreateAmbassador()
  testUpdateAmbassador()
  testNonAmbassadorCannotCreateAmbassador()
  testNonAmbassadorCannotUpdateAmbassador()
}
