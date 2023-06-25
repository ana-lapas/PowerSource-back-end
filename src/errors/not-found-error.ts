import { ApplicatonError } from "@/protocol";

export function notFoundError(message: string): ApplicatonError {
    return {        
        name: "Not found Error",
        message,
    }    
}