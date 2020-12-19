/*
Navicat MySQL Data Transfer

Source Server         : qqq
Source Server Version : 50617
Source Host           : localhost:3306
Source Database       : aaa

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2020-12-19 08:59:46
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `abc`
-- ----------------------------
DROP TABLE IF EXISTS `abc`;
CREATE TABLE `abc` (
  `id` int(4) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `name` varchar(255) DEFAULT NULL COMMENT '姓名',
  `pass` varchar(50) DEFAULT NULL COMMENT '密码',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of abc
-- ----------------------------
INSERT INTO `abc` VALUES ('1', '丽丽', '123456');
INSERT INTO `abc` VALUES ('3', '赵云', '7894');
INSERT INTO `abc` VALUES ('5', '关羽', '6666');
INSERT INTO `abc` VALUES ('6', '张飞', '77777');
INSERT INTO `abc` VALUES ('7', '张三', '99999');
INSERT INTO `abc` VALUES ('8', '吕布', '99999');
INSERT INTO `abc` VALUES ('9', '丽丽1', '45648');
INSERT INTO `abc` VALUES ('10', '丽丽2', '456465');
INSERT INTO `abc` VALUES ('13', '张清', '789');
INSERT INTO `abc` VALUES ('14', '丽丽5', '123789');
INSERT INTO `abc` VALUES ('15', '张清', '123456');
INSERT INTO `abc` VALUES ('16', '张清111', '123');
