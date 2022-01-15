<template>
  <div id="container">
    <h1>Welcome to <span id="spanny">Availity</span></h1>
    <div>
      <img
        id="logo"
        src="https://yt3.ggpht.com/ytc/AKedOLSc4qzIqsr7G8CiSd5UA1ZkR1zNxfX01eUEizOq8g=s900-c-k-c0x00ffffff-no-rj"
        alt="Availity logo"
      />
    </div>
    <p>If you would like to join please click below...</p>
    <button v-on:click.prevent="showForm = true" id="btn">Register</button>
    <form v-show="showForm" @submit.prevent="saveProvider()">
      <div id="form">
        <label>First Name:</label>
        <input type="text" v-model="newProvider.firstName" required />
        <label>Last Name:</label>
        <input type="text" v-model="newProvider.lastName" required />
        <label>NPI Number:</label>
        <input
          type="text"
          maxlength="10"
          pattern="\d{10}"
          v-model="newProvider.npiNumber"
          required
        />
        <label>Business Address:</label>
        <input type="text" v-model="newProvider.businessAddress" required />
        <label>Phone Number:</label>
        <input
          type="text"
          maxlength="10"
          pattern="[1-9]{1}[0-9]{9}"
          v-model="newProvider.phoneNumber"
          required
        />
        <label>Email:</label>
        <input type="email" v-model="newProvider.email" required />
        <input type="submit" id="sub" value="Submit" />
      </div>
    </form>
  </div>
</template>

<script>
import providerService from "../services/ProviderService";

export default {
  name: "Registration",
  data() {
    return {
      newProvider: {
        firstName: null,
        lastName: null,
        npiNumber: null,
        businessAddress: null,
        phoneNumber: null,
        email: null,
      },
      showForm: false,
    };
  },

  methods: {
    saveProvider() {
      providerService
        .addProvider(this.newProvider)
        .then((response) => {
          if (response.status === 200) {
            console.log("Boom uploaded");
          }
        })
        .catch((error) => {
          console.log(error);
        });
      this.showForm = false;
      this.newProvider = {};
      alert("Great Success!! You've been registered");
    },
  },
};
</script>

<style>
#form {
  margin: auto auto 1rem auto;
  width: 30%;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
}

label {
  color: #1f1c1c;
  display: flex;
}

input {
  border-bottom: 2px solid #9e9e9e;
  width: 100%;
  margin-bottom: 10px;
}

#sub {
  outline: none;
  color: #fff;
  background-color: #ff8c00;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
  padding: 8px 18px;
  font-size: 24px;
  text-align: center;
}

#sub:hover {
  background-color: #f5b362;
}

#sub:active {
  background-color: #cf770b;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

#spanny {
  color: #ff8c00;
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
    0 5px 0 #ccc, 0 6px 0 #ccc, 0 7px 0 #ccc, 0 8px 0 #ccc, 0 9px 0 #ccc,
    0 10px 0 #ccc, 0 11px 0 #ccc, 0 12px 0 #ccc, 0 20px 30px rgba(0, 0, 0, 0.5);
}

#logo {
  border-radius: 33%;
  max-height: 125px;
}

h1 {
  font-size: 80px;
}

p {
  font-size: 1.5em;
}

#btn {
  outline: none;
  color: #fff;
  background-color: #ff8c00;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
  padding: 8px 18px;
  font-size: 24px;
  text-align: center;
}

#btn:hover {
  background-color: #f5b362;
}

#btn:active {
  background-color: #cf770b;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
</style>