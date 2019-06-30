/* exported $subscribe */

const $subscribe = (function () {
    'use strict';
    const data = [
        'Nam scelerisque velit et tempor rutrum. Phasellus imperdiet ligula id tortor tincidunt, sit amet tristique ligula pharetra. Curabitur molestie lectus mattis, tempus risus sit amet, faucibus augue. Nullam elementum purus ut nibh elementum, vel placerat lectus congue. Nunc nec nisi tincidunt velit rutrum cursus ac eu arcu. Duis at odio.',
        'Integer viverra nulla nec justo mattis, sit amet fringilla sapien faucibus. Ut sit amet porta tellus. Duis nulla velit, pulvinar quis viverra aliquam, ultrices sit amet lacus. Pellentesque tincidunt libero nisl, sit amet ullamcorper urna rutrum at. Etiam ultrices velit ac erat vulputate congue. Mauris vehicula sagittis mi, a vestibulum.',
        'Pellentesque suscipit commodo ipsum, ut lobortis turpis pharetra quis. Proin varius porta dui, sit amet tempor velit aliquam ut. Morbi vitae ex sit amet dui ultricies pretium sit amet cursus turpis. Mauris dapibus justo vel quam cursus euismod. Donec tristique, ex vitae condimentum mollis, lectus risus tempor dui, quis commodo.',
        'Mauris sit amet metus ut elit lacinia venenatis vel vel velit. Duis ipsum metus, imperdiet in porta vitae, placerat sed mi. Proin pharetra nulla a ullamcorper varius. Morbi libero purus, aliquam sit amet sem non, vehicula euismod ante. Duis sit amet eros volutpat, luctus ipsum quis, porttitor dolor. Cras eu.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum ligula, suscipit eget eleifend quis, tempus vel felis. Mauris imperdiet fringilla nunc scelerisque lobortis. Aliquam erat volutpat. Duis gravida diam eu malesuada commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas vel ullamcorper velit. Quisque.',
        'Mauris quis consectetur dolor, in euismod ipsum. Quisque consectetur leo libero, in maximus eros bibendum in. Cras eget convallis leo. Vivamus nec elit non magna porta mollis. Aenean venenatis nunc id pretium consectetur. Vestibulum ut ligula vitae velit pulvinar aliquam quis sed nibh. Maecenas ac ligula tincidunt, placerat nunc ac.',
        'Ut vehicula, felis ac blandit vulputate, ligula eros pharetra odio, et tempus est tellus eu metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed pellentesque cursus urna quis congue. Donec malesuada tortor et nisi aliquet pharetra. Aliquam eu mollis risus. Nunc eget lectus a risus.',
        'Cras ipsum leo, tempor feugiat urna vitae, lobortis faucibus erat. Vestibulum interdum massa eu lorem porta, at varius elit euismod. Nullam vel mi leo. Suspendisse maximus nulla eget ex congue, a viverra dolor sollicitudin. Nam feugiat, tellus ornare ultrices fermentum, arcu eros scelerisque tortor, sed vulputate magna neque et sapien.',
        'Praesent sollicitudin tellus id vulputate cursus. In iaculis sed ex sed ullamcorper. Nulla facilisi. Nulla tempor sagittis auctor. In id eros mauris. Proin suscipit nisl metus, vitae dignissim odio pellentesque ac. Vivamus id dui sed neque vehicula viverra. Nulla massa turpis, mattis vel interdum id, eleifend id tellus. Aliquam pulvinar.',
        'Mauris efficitur turpis quis eleifend ultrices. In nibh dui, ullamcorper id nulla sit amet, pharetra porttitor tortor. Sed sed libero eu massa fermentum interdum. Pellentesque a sollicitudin turpis. Vivamus leo sapien, pulvinar ut orci malesuada, vestibulum porta lacus. Proin egestas lacinia erat, eu placerat nisi elementum eu. Donec aliquam ante.',
    ];
    let id = 0;

    return (callback) => {
        const idx = id++ % 10;
        const words = data[idx].split(' ');
        let stop = false;

        (function loop (i) {
            const w = words[i];

            if (!w || stop) {
                return callback(null);
            }

            setTimeout(() => {
                callback(w);
                loop(i + 1);
            }, 50);
        }(0));

        return () => {
            stop = true;
        };
    };
}());
