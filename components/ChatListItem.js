import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { ListItem } from 'react-native-elements' //https://reactnativeelements.com/docs/next/components/listitem
                                                

//the Purpose of this component is to create single list Items that will be displayed in the ChatScreen. Like an Inbox Style.
const ChatListItem = ({id, chatName, joinChat}) => {

  return (
    <ListItem key={id} bottomDivider
    onPress={()=> joinChat(id, chatName)}>
      <ListItem.Content>

        <ListItem.Title style={{fontWeight:"700"}}>
            {chatName}
        </ListItem.Title>

        <ListItem.Subtitle numberOfLines={2}> 
            AAD
        </ListItem.Subtitle>
        
      </ListItem.Content>
    </ListItem>
  )
}

export default ChatListItem

const styles = StyleSheet.create({})