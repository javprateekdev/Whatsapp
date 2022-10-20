import conversation from "../model/Conversation.js";



export const newConversation =async (request,response)=>{
    try{ 
        const senderId=request.body.senderId;
        const receiverId =request.body.receiverId;


        const exist= await conversation.findOne({members:{$all:[receiverId,senderId]}});
        if (exist){
            return response.status(200).json('conversation already exists');
        }
        const newconversation=new conversation({
            members:[senderId,receiverId]
        })
        await newconversation.save();
        return response.status(200).json('conversation saved successfuly');
    }catch(error){
        return response.status(500).json(error.message);

    }
}