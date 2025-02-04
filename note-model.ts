export type NoteModel = {
  id: string
  createdBy: string
  editedBy?: string
  createdDate: Date
  description: string
  pinnedDate?: Date
}
