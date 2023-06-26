import { ApplicatonError } from "@/protocol";

export function unauthorizedError(message: string): ApplicatonError {
    return {        
        name: "Unauthorized Error",
        message,
    }    
}