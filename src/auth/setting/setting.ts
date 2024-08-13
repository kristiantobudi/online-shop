import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import bcrypt from "bcryptjs";
import { AuthType } from "@/models/register";
import { db } from "@/firebase/setting";

type RegisterUserType = AuthType;

async function getNextUserId(): Promise<number> {
    try {
        const counterDocRef = doc(db, "counter", "usersId");
        const counterDocSnap = await getDoc(counterDocRef);
        
        if (counterDocSnap.exists()) {
            const currentId = counterDocSnap.data().currentId;
            await updateDoc(counterDocRef, { currentId: currentId + 1 });
            return currentId;
        } else {
            await setDoc(counterDocRef, { currentId: 1 });
            return 1;
        }
    } catch(e) {
        console.error("Error getting document: ", e);
        throw e;
    }
}

export async function registerUser(data: RegisterUserType): Promise<void> {
    try {
        const id = await getNextUserId();
        const hashedPassword = bcrypt.hash(data.password, 10);
        const userData = {
            ...data,
            password: hashedPassword,
            id: id.toString()
        };
        delete userData.confirmPassword; // Remove confirmPassword from stored data
        await setDoc(doc(db, "users", data.email), userData);
    } catch (e) {
        console.error("Error adding document: ", e);
        throw e;
    }
}

export async function loginUser(data: Pick<RegisterUserType, 'email' | 'password'>): Promise<AuthType> {
    if (!data.email) {
        throw new Error("Email is required");
    }
    try {
        const userDocRef = doc(db, "users", data.email);
        const userDocSnap = await getDoc(userDocRef);
        if (!userDocSnap.exists()) {
            throw new Error("User not found");
        }
        const userData = userDocSnap.data() as AuthType;
        const isPasswordMatch = bcrypt.compare(data.password, userData.password);
        if (!isPasswordMatch) {
            throw new Error("Invalid password");
        }
        return userData;
    } catch (e) {
        console.error("Error during login: ", e);
        throw e;
    }
}