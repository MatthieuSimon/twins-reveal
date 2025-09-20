<template>
    <div>
        <h1>Quel est le prix de cette poussette avec ses accessoires?</h1>
        <img src="@/assets/versiti-2-nacelles.png" alt="The Price is Right image" />
        <div style="margin-top: 20px;">
            <input v-model.number="enteredPrice" type="number" placeholder="Enter your price" />
            <button @click="checkPrice">Vérifier</button>
        </div>
        <div v-if="message" style="margin-top: 10px;">
            {{ message }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            enteredPrice: null,
            message: ''
        };
    },
    methods: {
        checkPrice() {
            if (this.enteredPrice === 1206) {
                window.sessionStorage.setItem('currentStep', '3');
                emit("puzzle-solved", '3');
            } else if (this.enteredPrice < 1206) {
                this.message = "C'est plus!";
            } else if (this.enteredPrice > 1206) {
                this.message = "C'est moins!";
            } else {
                this.message = "";
            }
        }
    }
};
</script>