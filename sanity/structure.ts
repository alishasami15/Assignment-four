// import type {StructureResolver} from 'sanity/structure'

// // https://www.sanity.io/docs/structure-builder-cheat-sheet
// export const structure: StructureResolver = (S) =>
//   S.list()
//     .title('Blog')
//     .items([
      
//       S.divider(),
//       ...S.documentTypeListItems().filter(
//         (item) => item.getId() && !['blogs'].includes(item.getId()!),
//       ),
//     ])
import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items(S.documentTypeListItems())