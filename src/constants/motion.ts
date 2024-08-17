export const containerVariants = {
    hidden: { opacity: 0, y: 50 }, // 처음 상태: 투명도 0, y축으로 50px 아래
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            when: "beforeChildren",
            staggerChildren: 0.3,
        },
    },
};

export const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};