export class TreeNode {
    text: {
        name: string,
        title?: string,
        contact: {
            val: string,
            href: string,
            target: '_self'
        }
    } = {
            name: '',
            contact: {
                val: 'Chi tiết',
                href: '',
                target: '_self'
            }
        };
    HTMLclass = 'angular';
    HTMLid = '';
    id = 0;
    image = 'https://img.icons8.com/color/1600/matrix-architect.png';
    gender = 'male';
    birthDay?: string;
    deadDay?: string;
    infomation?: string;
    blablaInfo?: string;
    parent?: TreeNode;
}
